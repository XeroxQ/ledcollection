const _helpers = require("../helpers");

module.exports = [
  { id: "led_clockwork_white", colors: [[255, 255, 255]] },
  { id: "led_clockwork_red", colors: [[255, 0, 0]] },
  { id: "led_clockwork_orange", colors: [[255, 85, 0]] },
  { id: "led_clockwork_yellow", colors: [[255, 255, 0]] },
  { id: "led_clockwork_green", colors: [[0, 255, 0]] },
  { id: "led_clockwork_cyan", colors: [[0, 255, 255]] },
  { id: "led_clockwork_blue", colors: [[0, 0, 255]] },
  { id: "led_clockwork_purple", colors: [[64, 0, 255]] },
  { id: "led_clockwork_magenta", colors: [[255, 0, 255]] },
  { id: "led_clockwork_flow", colors: [[0, 0, 0]] },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 24, tfps: 60, rpm: 0, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB) {
  var frames = [];
  var nframe = 48;

  if (colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0) {
    // color flow
    var nCycle = 3;
    var col = _helpers.getColorFlow(nCycle * nframe);
  } else {
    // fixed color
    var nCycle = 1;
    var col = [colRGB];
    for (var i = 0; i < nCycle * nframe; i++) {
      col.push(colRGB);
    }
  }

  // pattern cycles to complete 1 color cycle...
  for (var cycle = 0; cycle < nCycle; cycle++) {
    // for every frame...
    for (var fr = 0; fr < nframe; fr++) {
      var frame = [];

      // for every pixel...
      for (var pixel = 0; pixel < 24; pixel++) {
        var color = [0, 0, 0];
        var px = pixel + 9;
        if (px > 23) {
          px -= 24;
        }
        var px2 = px + 12;
        if (px2 > 23) {
          px2 -= 24;
        }

        if (fr < 24) {
          if (px == fr || px2 == fr) {
            color = col[cycle * nframe + fr];
          }
        } else {
          if (
            px == 48 - fr ||
            px2 == 48 - fr ||
            px + 24 == 48 - fr ||
            px2 + 24 == 48 - fr
          ) {
            color = col[cycle * nframe + fr];
          }
        }
        frame.push({ r: color[0], g: color[1], b: color[2] });
      }
      frames.push(frame);
    }
  }
  return frames;
}
