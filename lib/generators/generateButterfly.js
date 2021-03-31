const _helpers = require("../helpers");

module.exports = [
  { id: "led_butterfly_white", colors: [[255, 255, 255]] },
  { id: "led_butterfly_red", colors: [[255, 0, 0]] },
  { id: "led_butterfly_orange", colors: [[255, 85, 0]] },
  { id: "led_butterfly_yellow", colors: [[255, 255, 0]] },
  { id: "led_butterfly_green", colors: [[0, 255, 0]] },
  { id: "led_butterfly_cyan", colors: [[0, 255, 255]] },
  { id: "led_butterfly_blue", colors: [[0, 0, 255]] },
  { id: "led_butterfly_purple", colors: [[64, 0, 255]] },
  { id: "led_butterfly_magenta", colors: [[255, 0, 255]] },
  { id: "led_butterfly_flow", colors: [[0, 0, 0]] },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 5, tfps: 60, rpm: 0, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB) {
  var frames = [];
  var nframe = 18;

  if (colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0) {
    // color flow
    var nCycle = 7;
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
        var px = pixel + 3;
        if (px > 23) {
          px -= 24;
        }

        if (fr < 6) {
          // expansion
          var p1 = 6 - fr,
            p2 = 6 + fr;
          var p3 = nframe - fr,
            p4 = nframe + fr;

          if ((px >= p1 && px <= p2) || (px >= p3 && px <= p4)) {
            color = col[cycle * nframe + fr];
            if (px != p1 && px != p2 && px != p3 && px != p4) {
              color = [
                Math.round(color[0] / 2),
                Math.round(color[1] / 2),
                Math.round(color[2] / 2),
              ];
            }
          }
        } else if (fr < 10) {
          // contraction
          var p1 = 6 - (10 - fr),
            p2 = 6 + (10 - fr);
          var p3 = nframe - (10 - fr),
            p4 = nframe + (10 - fr);

          if ((px >= p1 && px <= p2) || (px >= p3 && px <= p4)) {
            color = col[cycle * nframe + fr];
            if (px != p1 && px != p2 && px != p3 && px != p4) {
              color = [
                Math.round(color[0] / 2),
                Math.round(color[1] / 2),
                Math.round(color[2] / 2),
              ];
            }
          }
        } else if (fr < 14) {
          // fade-out
          if (px == 6 || px == 18) {
            var div = Math.pow(2, fr - 10);
            color = col[cycle * nframe + fr];
            color = [
              Math.round(color[0] / div),
              Math.round(color[1] / div),
              Math.round(color[2] / div),
            ];
          }
        } else if (fr < 18) {
          // fade-in
          if (px == 6 || px == 18) {
            var div = Math.pow(2, 18 - fr);
            color = col[cycle * nframe + fr];
            color = [
              Math.round(color[0] / div),
              Math.round(color[1] / div),
              Math.round(color[2] / div),
            ];
          }
        }
        frame.push({ r: color[0], g: color[1], b: color[2] });
      }
      frames.push(frame);
    }
  }
  return frames;
}
