module.exports = [
  { id: "led_scanner_white", colors: [[255, 255, 255]] },
  { id: "led_scanner_red", colors: [[255, 0, 0]] },
  { id: "led_scanner_orange", colors: [[255, 85, 0]] },
  { id: "led_scanner_yellow", colors: [[255, 255, 0]] },
  { id: "led_scanner_green", colors: [[0, 255, 0]] },
  { id: "led_scanner_cyan", colors: [[0, 255, 255]] },
  { id: "led_scanner_blue", colors: [[0, 0, 255]] },
  { id: "led_scanner_purple", colors: [[64, 0, 255]] },
  { id: "led_scanner_magenta", colors: [[255, 0, 255]] },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 3, tfps: 60, rpm: 0, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB) {
  var cR = colRGB[0] + 4;
  if (colRGB[0] > 255) {
    colRGB[0] = 255;
  }
  var cG = colRGB[1] + 4;
  if (colRGB[1] > 255) {
    colRGB[1] = 255;
  }
  var cB = colRGB[2] + 4;
  if (colRGB[2] > 255) {
    colRGB[2] = 255;
  }

  var frames = [];
  // for every frame...
  for (var fr = 0; fr < 12; fr++) {
    var frame = [];

    if (fr <= 6) {
      var pixnum = fr * 2 + 15;
    } else {
      var pixnum = (12 - fr) * 2 + 15;
    }
    if (pixnum > 23) {
      pixnum -= 24;
    }

    // for every pixel...
    for (var pixel = 0; pixel < 24; pixel++) {
      var color = [0, 0, 0];
      if (pixel <= 3 || pixel >= 15) {
        var color = [0, 0, 0];
        if (Math.floor(pixel / 2) * 2 != pixel) {
          var color = [
            Math.round(colRGB[0] / 32),
            Math.round(colRGB[1] / 32),
            Math.round(colRGB[2] / 32),
          ];
          if (pixel == pixnum) {
            color = [cR, cG, cB];
          }
        }
      }
      frame.push({ r: color[0], g: color[1], b: color[2] });
    }
    frames.push(frame);
  }
  return frames;
}
