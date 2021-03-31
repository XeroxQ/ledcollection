module.exports = [
  { id: "led_flash_white", colors: [[255, 255, 255]] },
  { id: "led_flash_red", colors: [[255, 0, 0]] },
  { id: "led_flash_orange", colors: [[255, 85, 0]] },
  { id: "led_flash_yellow", colors: [[255, 255, 0]] },
  { id: "led_flash_green", colors: [[0, 255, 0]] },
  { id: "led_flash_cyan", colors: [[0, 255, 255]] },
  { id: "led_flash_blue", colors: [[0, 0, 255]] },
  { id: "led_flash_purple", colors: [[64, 0, 255]] },
  { id: "led_flash_magenta", colors: [[255, 0, 255]] },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 16, tfps: 16, rpm: 0, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB) {
  var frames = [];

  // for every frame...
  for (var fr = 0; fr < 32; fr++) {
    var frame = [];
    if (fr == 2) {
      var color = colRGB;
    } else {
      var color = [0, 0, 0];
    }

    // for every pixel...
    for (var pixel = 0; pixel < 24; pixel++) {
      frame.push({ r: color[0], g: color[1], b: color[2] });
    }
    frames.push(frame);
  }
  return frames;
}
