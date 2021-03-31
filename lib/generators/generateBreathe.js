const _helpers = require("../helpers");

module.exports = [
  { id: "led_breathe_white", colors: [[255, 255, 255]] },
  { id: "led_breathe_red", colors: [[255, 0, 0]] },
  { id: "led_breathe_orange", colors: [[255, 85, 0]] },
  { id: "led_breathe_yellow", colors: [[255, 255, 0]] },
  { id: "led_breathe_green", colors: [[0, 255, 0]] },
  { id: "led_breathe_cyan", colors: [[0, 255, 255]] },
  { id: "led_breathe_blue", colors: [[0, 0, 255]] },
  { id: "led_breathe_purple", colors: [[64, 0, 255]] },
  { id: "led_breathe_magenta", colors: [[255, 0, 255]] },
  { id: "led_breathe_flow", colors: [[0, 0, 0]] },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 1, tfps: 60, rpm: 0, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB) {
  var frames = [];
  var maxFr = 8,
    divFr = maxFr / 2,
    stepFr = 255 / divFr;
  var levMin = 8,
    levDiv = ((255 - levMin) / 255) * stepFr;

  var nframe = maxFr;

  if (colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0) {
    // color flow
    var nCycle = 11;
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
    for (var fr = 0; fr < maxFr; fr++) {
      var frame = [];
      var color = [0, 0, 0];
      var xCol = col[cycle * nframe + fr];
      var divR = xCol[0] / 255,
        divG = xCol[1] / 255,
        divB = xCol[2] / 255;

      if (fr < divFr) {
        if (xCol[0] > 0) {
          color[0] = Math.floor((levMin + levDiv * fr) * divR);
        }
        if (xCol[1] > 0) {
          color[1] = Math.floor((levMin + levDiv * fr) * divG);
        }
        if (xCol[2] > 0) {
          color[2] = Math.floor((levMin + levDiv * fr) * divB);
        }
      } else {
        if (xCol[0] > 0) {
          color[0] = Math.floor((levMin + levDiv * (maxFr - 1 - fr)) * divR);
        }
        if (xCol[1] > 0) {
          color[1] = Math.floor((levMin + levDiv * (maxFr - 1 - fr)) * divG);
        }
        if (xCol[2] > 0) {
          color[2] = Math.floor((levMin + levDiv * (maxFr - 1 - fr)) * divB);
        }
      }

      // for every pixel...
      for (var pixel = 0; pixel < 24; pixel++) {
        frame.push({ r: color[0], g: color[1], b: color[2] });
      }
      frames.push(frame);
    }
  }
  return frames;
}
