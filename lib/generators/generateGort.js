module.exports = [
  {
    id: "led_gort_red_yellow",
    colors: [
      [255, 255, 0],
      [255, 0, 0],
    ],
  },
  {
    id: "led_gort_red_green",
    colors: [
      [0, 255, 0],
      [255, 0, 0],
    ],
  },
  {
    id: "led_gort_red_cyan",
    colors: [
      [0, 255, 255],
      [255, 0, 0],
    ],
  },
  {
    id: "led_gort_red_blue",
    colors: [
      [0, 0, 255],
      [255, 0, 0],
    ],
  },
  {
    id: "led_gort_red_magenta",
    colors: [
      [255, 0, 255],
      [255, 0, 0],
    ],
  },

  {
    id: "led_gort_yellow_red",
    colors: [
      [255, 0, 0],
      [255, 255, 0],
    ],
  },
  {
    id: "led_gort_yellow_green",
    colors: [
      [0, 255, 0],
      [255, 255, 0],
    ],
  },
  {
    id: "led_gort_yellow_cyan",
    colors: [
      [0, 255, 255],
      [255, 255, 0],
    ],
  },
  {
    id: "led_gort_yellow_blue",
    colors: [
      [0, 0, 255],
      [255, 255, 0],
    ],
  },
  {
    id: "led_gort_yellow_magenta",
    colors: [
      [255, 0, 255],
      [255, 255, 0],
    ],
  },

  {
    id: "led_gort_green_red",
    colors: [
      [255, 0, 0],
      [0, 255, 0],
    ],
  },
  {
    id: "led_gort_green_yellow",
    colors: [
      [255, 255, 0],
      [0, 255, 0],
    ],
  },
  {
    id: "led_gort_green_cyan",
    colors: [
      [0, 255, 255],
      [0, 255, 0],
    ],
  },
  {
    id: "led_gort_green_blue",
    colors: [
      [0, 0, 255],
      [0, 255, 0],
    ],
  },
  {
    id: "led_gort_green_magenta",
    colors: [
      [255, 0, 255],
      [0, 255, 0],
    ],
  },

  {
    id: "led_gort_cyan_red",
    colors: [
      [255, 0, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "led_gort_cyan_yellow",
    colors: [
      [255, 255, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "led_gort_cyan_green",
    colors: [
      [0, 255, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "led_gort_cyan_blue",
    colors: [
      [0, 0, 255],
      [0, 255, 255],
    ],
  },
  {
    id: "led_gort_cyan_magenta",
    colors: [
      [255, 0, 255],
      [0, 255, 255],
    ],
  },

  {
    id: "led_gort_blue_red",
    colors: [
      [255, 0, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_gort_blue_yellow",
    colors: [
      [255, 255, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_gort_blue_green",
    colors: [
      [0, 255, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_gort_blue_cyan",
    colors: [
      [0, 255, 255],
      [0, 0, 255],
    ],
  },
  {
    id: "led_gort_blue_magenta",
    colors: [
      [255, 0, 255],
      [0, 0, 255],
    ],
  },

  {
    id: "led_gort_magenta_red",
    colors: [
      [255, 0, 0],
      [255, 0, 255],
    ],
  },
  {
    id: "led_gort_magenta_yellow",
    colors: [
      [255, 255, 0],
      [255, 0, 255],
    ],
  },
  {
    id: "led_gort_magenta_green",
    colors: [
      [0, 255, 0],
      [255, 0, 255],
    ],
  },
  {
    id: "led_gort_magenta_cyan",
    colors: [
      [0, 255, 255],
      [255, 0, 255],
    ],
  },
  {
    id: "led_gort_magenta_blue",
    colors: [
      [0, 0, 255],
      [255, 0, 255],
    ],
  },
  {
    id: "led_gort_red_yellow_green",
    colors: [
      [255, 0, 0],
      [0, 255, 0],
      [255, 255, 0],
    ],
  },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 3, tfps: 60, rpm: 0, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB1, colRGB2) {
  var frames = [];

  var colRGB3 = [1, 1, 1];
  for (var i = 0; i < 3; i++) {
    colRGB3[i] = Math.round(colRGB3[i] - colRGB1[i] / 510 - colRGB2[i] / 510);
  }
  // for every frame...
  for (var fr = 0; fr < 16; fr++) {
    var frame = [];

    if (fr < 9) {
      var pixnum = fr + 17;
    } else {
      var pixnum = 33 - fr;
    }
    var pixnum1 = pixnum + 1,
      pixnum2 = pixnum - 1,
      pixnum3 = pixnum + 2,
      pixnum4 = pixnum - 2;
    if (pixnum > 23) {
      pixnum -= 24;
    }
    if (pixnum1 > 23) {
      pixnum1 -= 24;
    }
    if (pixnum2 > 23) {
      pixnum2 -= 24;
    }
    if (pixnum3 > 23) {
      pixnum3 -= 24;
    }
    if (pixnum4 > 23) {
      pixnum4 -= 24;
    }

    // for every pixel...
    for (var pixel = 0; pixel < 24; pixel++) {
      var color = colRGB3;
      if (pixel == pixnum) {
        color = colRGB1;
      }
      if (pixel == pixnum1 || pixel == pixnum2) {
        color = [
          Math.round(colRGB2[0] / 8),
          Math.round(colRGB2[1] / 8),
          Math.round(colRGB2[2] / 8),
        ];
      }
      if (pixel == pixnum3 || pixel == pixnum4) {
        color = [
          Math.round(colRGB2[0]),
          Math.round(colRGB2[1]),
          Math.round(colRGB2[2]),
        ];
      }

      frame.push({ r: color[0], g: color[1], b: color[2] });
    }
    frames.push(frame);
  }
  return frames;
}
