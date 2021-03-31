const _helpers = require("../helpers");

module.exports = [
  { id: "led_sparkle_random", colors: [[-1, -1, -1]] },
  { id: "led_sparkle_white", colors: [[255, 255, 255]] },
  { id: "led_sparkle_red", colors: [[255, 0, 0]] },
  { id: "led_sparkle_orange", colors: [[255, 85, 0]] },
  { id: "led_sparkle_yellow", colors: [[255, 255, 0]] },
  { id: "led_sparkle_green", colors: [[0, 255, 0]] },
  { id: "led_sparkle_cyan", colors: [[0, 255, 255]] },
  { id: "led_sparkle_blue", colors: [[0, 0, 255]] },
  { id: "led_sparkle_purple", colors: [[64, 0, 255]] },
  { id: "led_sparkle_magenta", colors: [[255, 0, 255]] },
  { id: "led_sparkle_flow", colors: [[0, 0, 0]] },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 4, tfps: 60, rpm: 2, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB) {
  var frames = [];
  var nframe = 30;

  if (colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0) {
    // color flow
    var nCycle = 4;
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
    for (var fr = 0; fr < 30; fr++) {
      var frame = [];
      var dots = [
        Math.floor(Math.random() * 8),
        Math.floor(Math.random() * 8),
        Math.floor(Math.random() * 8),
      ];

      // for every pixel...
      for (var pixel = 0; pixel < 24; pixel++) {
        var color = [0, 0, 0];
        if (pixel == dots[0] || pixel == dots[1] + 8 || pixel == dots[2] + 16) {
          var dat = Math.floor(Math.random() * 255) + 1;

          for (var i = 0; i < 3; i++) {
            if (colRGB[i] >= 0) {
              color[i] = Math.round((col[cycle * nframe + fr][i] / 255) * dat);
            } else {
              color[i] = Math.floor(Math.random() * 4) * 85;
            }
          }
          if (
            colRGB == [-1, -1, -1] &&
            color[0] > 0 &&
            color[1] > 0 &&
            color[2] > 0
          ) {
            color[Math.floor(Math.random() * 3)] = 0;
          }
        }
        frame.push({ r: color[0], g: color[1], b: color[2] });
      }
      frames.push(frame);
    }
  }
  return frames;
}
