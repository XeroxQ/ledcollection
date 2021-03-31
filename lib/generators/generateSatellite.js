const _helpers = require("../helpers");

module.exports = [
  { id: "led_satellite_white", colors: [[255, 255, 255]] },
  { id: "led_satellite_red", colors: [[255, 0, 0]] },
  { id: "led_satellite_orange", colors: [[255, 85, 0]] },
  { id: "led_satellite_yellow", colors: [[255, 255, 0]] },
  { id: "led_satellite_green", colors: [[0, 255, 0]] },
  { id: "led_satellite_cyan", colors: [[0, 255, 255]] },
  { id: "led_satellite_blue", colors: [[0, 0, 255]] },
  { id: "led_satellite_purple", colors: [[64, 0, 255]] },
  { id: "led_satellite_magenta", colors: [[255, 0, 255]] },
  { id: "led_satellite_flow", colors: [[0, 0, 0]] },
  { id: "led_satellite_random", colors: [[-1, -1, -1]] },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 1, tfps: 60, rpm: 10, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB) {
  var frames = [];

  if (colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0) {
    // color flow
    var col = _helpers.getColorFlow(30);
  } else if (colRGB[0] == -1 && colRGB[1] == -1 && colRGB[2] == -1) {
    // random colors
    var col = _helpers.getRandomColors();
  } else {
    // fixed color
    var col = [colRGB];
  }

  // for every frame...
  for (var fr = 0; fr < col.length; fr++) {
    var frame = [];

    // for every pixel...
    for (var pixel = 0; pixel < 24; pixel++) {
      if (pixel == 0) {
        var color = col[fr];
      } else {
        var color = [0, 0, 0];
      }
      frame.push({ r: color[0], g: color[1], b: color[2] });
    }
    frames.push(frame);
  }
  return frames;
}
