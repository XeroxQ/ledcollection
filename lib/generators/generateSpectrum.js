const _helpers = require("../helpers");

module.exports = [{ id: "led_spectrum_dimmed", colors: [] }].map(
  (screensaver) => ({
    frames: generate(...screensaver.colors),
    options: { fps: 1, tfps: 60, rpm: 12, ...screensaver.options },
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
      var hue = (pixel/(24)) * 360;
      var color = _helpers.hsvToRgbLow( hue, 100, 100 )
      frame.push({ r: color[0], g: color[1], b: color[2] });
    }
    frames.push(frame);
  }
  return frames;
}
