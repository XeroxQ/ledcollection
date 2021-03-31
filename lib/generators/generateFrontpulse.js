module.exports = [
  { id: "led_frontpulse_white", colors: [[255, 255, 255]] },
  { id: "led_frontpulse_red", colors: [[255, 0, 0]] },
  { id: "led_frontpulse_orange", colors: [[255, 85, 0]] },
  { id: "led_frontpulse_yellow", colors: [[255, 255, 0]] },
  { id: "led_frontpulse_green", colors: [[0, 255, 0]] },
  { id: "led_frontpulse_cyan", colors: [[0, 255, 255]] },
  { id: "led_frontpulse_blue", colors: [[0, 0, 255]] },
  { id: "led_frontpulse_purple", colors: [[64, 0, 255]] },
  { id: "led_frontpulse_magenta", colors: [[255, 0, 255]] },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 9, tfps: 60, rpm: 0, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB) {
  var frames = [];
  var colpix = [];
  var divR = colRGB[0] / 255,
    divG = colRGB[1] / 255,
    divB = colRGB[2] / 255;

  // for every frame...
  for (var fr = 0; fr < 12; fr++) {
    var frame = [];
    var pixnum1 = 21 - fr;
    var pixnum2 = 21 + fr;
    if (pixnum1 > 23) {
      pixnum1 -= 24;
    }
    if (pixnum2 > 23) {
      pixnum2 -= 24;
    }

    colpix = [0, 0, 0];
    if (colRGB[0] > 0) {
      colpix[0] = Math.round((255 / Math.pow(2, fr / 1.4)) * divR);
    }
    if (colRGB[1] > 0) {
      colpix[1] = Math.round((255 / Math.pow(2, fr / 1.4)) * divG);
    }
    if (colRGB[2] > 0) {
      colpix[2] = Math.round((255 / Math.pow(2, fr / 1.4)) * divB);
    }

    // for every pixel...
    for (var pixel = 0; pixel < 24; pixel++) {
      var color = [0, 0, 0];

      if (pixel == pixnum1 || pixel == pixnum2) {
        color = colpix;
        if (pixel == 21) {
          color = [colRGB[0] + 32, colRGB[1] + 32, colRGB[2] + 32];
        }
        if (color[0] > 255) {
          color[0] = 255;
        }
        if (color[1] > 255) {
          color[1] = 255;
        }
        if (color[2] > 255) {
          color[2] = 255;
        }
      } else {
        if (pixel == 21) {
          color = colpix;
        }
      }

      frame.push({ r: color[0], g: color[1], b: color[2] });
    }
    frames.push(frame);
  }
  return frames;
}
