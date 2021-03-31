const _helpers = require("../helpers");

module.exports = [{ id: "led_flow", colors: [] }].map((screensaver) => ({
  frames: generate(),
  options: { fps: 1, tfps: 60, rpm: 0, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate() {
  var frames = [];
  var col = _helpers.getColorFlow(30);

  // for every frame...
  for (var fr = 0; fr < col.length; fr++) {
    var frame = [];
    var color = col[fr];

    // for every pixel...
    for (var pixel = 0; pixel < 24; pixel++) {
      frame.push({ r: color[0], g: color[1], b: color[2] });
    }
    frames.push(frame);
  }
  return frames;
}
