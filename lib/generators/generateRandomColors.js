module.exports = [{ id: "led_random_colors", colors: [] }].map(
  (screensaver) => ({
    frames: generate(...screensaver.colors),
    options: { fps: 1, tfps: 60, rpm: 3, ...screensaver.options },
    priority: "INFORMATIVE",
    duration: false,
    ...screensaver,
  })
);

function generate() {
  var frames = [];

  // for every frame...
  for (var fr = 0; fr < 60; fr++) {
    var frame = [];

    // for every pixel...
    for (var pixel = 0; pixel < 24; pixel++) {
      var color = [0, 0, 0];
      if (Math.floor(pixel / 4) * 4 == pixel) {
        color = [
          Math.floor(Math.random() * 4) * 85,
          Math.floor(Math.random() * 4) * 85,
          Math.floor(Math.random() * 4) * 85,
        ];
        if (color[0] > 0 && color[1] > 0 && color[2] > 0) {
          color[Math.floor(Math.random() * 3)] = 0;
        }
      }
      frame.push({ r: color[0], g: color[1], b: color[2] });
    }
    frames.push(frame);
  }
  return frames;
}
