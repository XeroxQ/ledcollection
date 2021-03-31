const _helpers = require("../helpers");

module.exports = [
  { id: "led_pulsetrain_white", colors: [[255, 255, 255]] },
  { id: "led_pulsetrain_red", colors: [[255, 0, 0]] },
  { id: "led_pulsetrain_orange", colors: [[255, 85, 0]] },
  { id: "led_pulsetrain_yellow", colors: [[255, 255, 0]] },
  { id: "led_pulsetrain_green", colors: [[0, 255, 0]] },
  { id: "led_pulsetrain_cyan", colors: [[0, 255, 255]] },
  { id: "led_pulsetrain_blue", colors: [[0, 0, 255]] },
  { id: "led_pulsetrain_purple", colors: [[64, 0, 255]] },
  { id: "led_pulsetrain_magenta", colors: [[255, 0, 255]] },
  { id: "led_pulsetrain_flow", colors: [[0, 0, 0]] },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 12, tfps: 60, rpm: 17, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB) {
  var frames = [];
  var nframe = 32;

  if (colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0) {
    // color flow
    var nCycle = 6;
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

      if (fr < 16) {
        var colDiv = Math.pow(2, fr / 4);
      } else {
        var colDiv = Math.pow(2, (31 - fr) / 4);
      }
      // for every pixel...
      for (var pixel = 0; pixel < 24; pixel += 1) {
        var color = [0, 0, 0];
        if (Math.floor(pixel / 4) * 4 == pixel) {
          color = [
            Math.round(col[cycle * nframe + fr][0] / colDiv),
            Math.round(col[cycle * nframe + fr][1] / colDiv),
            Math.round(col[cycle * nframe + fr][2] / colDiv),
          ];
        }
        frame.push({ r: color[0], g: color[1], b: color[2] });
      }
      frames.push(frame);
    }
  }
  return frames;
}
