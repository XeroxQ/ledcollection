const _helpers = require("../helpers");

module.exports = [
  { id: "led_pulsar_white", colors: [[255, 255, 255]] },
  { id: "led_pulsar_red", colors: [[255, 0, 0]] },
  { id: "led_pulsar_orange", colors: [[255, 85, 0]] },
  { id: "led_pulsar_yellow", colors: [[255, 255, 0]] },
  { id: "led_pulsar_green", colors: [[0, 255, 0]] },
  { id: "led_pulsar_cyan", colors: [[0, 255, 255]] },
  { id: "led_pulsar_blue", colors: [[0, 0, 255]] },
  { id: "led_pulsar_purple", colors: [[64, 0, 255]] },
  { id: "led_pulsar_magenta", colors: [[255, 0, 255]] },
  { id: "led_pulsar_flow", colors: [[0, 0, 0]] },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 12, tfps: 60, rpm: 0, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB) {
  var frames = [];

  if (colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0) {
    // color flow
    var col = _helpers.getColorFlow(24);
  } else {
    // fixed color
    var col = [colRGB];
    for (var i = 0; i < 24; i++) {
      col.push(colRGB);
    }
  }

  // for every frame...
  for (var fr = 0; fr < 24; fr++) {
    var frame = [];

    // for every pixel...
    for (var pixel = 0; pixel < 24; pixel++) {
      var color = [0, 0, 0];
      var px = pixel + 3;
      if (px > 23) {
        px -= 24;
      }

      if (fr < 12) {
        if (px >= 0 && px <= fr) {
          color = col[fr];
        } else if (px <= 24 && px >= 24 - fr) {
          color = col[fr];
        }
      } else {
        if (px >= fr - 12 && px <= 12) {
          color = col[fr];
        } else if (px < 36 - fr && px >= 12) {
          color = col[fr];
        }
      }

      frame.push({ r: color[0], g: color[1], b: color[2] });
    }
    frames.push(frame);
  }
  // 50% off
  for (var fr = 0; fr < 24; fr++) {
    var frame = [];
    for (var pixel = 0; pixel < 24; pixel++) {
      frame.push({ r: 0, g: 0, b: 0 });
    }
    frames.push(frame);
  }
  return frames;
}
