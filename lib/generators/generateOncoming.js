module.exports = [
  {
    id: "led_oncoming_red_orange",
    colors: [
      [255, 0, 0],
      [255, 85, 0],
    ],
  },
  {
    id: "led_oncoming_red_yellow",
    colors: [
      [255, 0, 0],
      [255, 255, 0],
    ],
  },
  {
    id: "led_oncoming_red_green",
    colors: [
      [255, 0, 0],
      [0, 255, 0],
    ],
  },
  {
    id: "led_oncoming_red_cyan",
    colors: [
      [255, 0, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "led_oncoming_red_blue",
    colors: [
      [255, 0, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_oncoming_red_purple",
    colors: [
      [255, 0, 0],
      [64, 0, 255],
    ],
  },
  {
    id: "led_oncoming_red_magenta",
    colors: [
      [255, 0, 0],
      [255, 0, 255],
    ],
  },

  {
    id: "led_oncoming_orange_yellow",
    colors: [
      [255, 85, 0],
      [255, 255, 0],
    ],
  },
  {
    id: "led_oncoming_orange_green",
    colors: [
      [255, 85, 0],
      [0, 255, 0],
    ],
  },
  {
    id: "led_oncoming_orange_cyan",
    colors: [
      [255, 85, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "led_oncoming_orange_blue",
    colors: [
      [255, 85, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_oncoming_orange_purple",
    colors: [
      [255, 85, 0],
      [64, 0, 255],
    ],
  },
  {
    id: "led_oncoming_orange_magenta",
    colors: [
      [255, 85, 0],
      [255, 0, 255],
    ],
  },

  {
    id: "led_oncoming_yellow_green",
    colors: [
      [255, 255, 0],
      [0, 255, 0],
    ],
  },
  {
    id: "led_oncoming_yellow_cyan",
    colors: [
      [255, 255, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "led_oncoming_yellow_blue",
    colors: [
      [255, 255, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_oncoming_yellow_purple",
    colors: [
      [255, 255, 0],
      [64, 0, 255],
    ],
  },
  {
    id: "led_oncoming_yellow_magenta",
    colors: [
      [255, 255, 0],
      [255, 0, 255],
    ],
  },

  {
    id: "led_oncoming_green_cyan",
    colors: [
      [0, 255, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "led_oncoming_green_blue",
    colors: [
      [0, 255, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_oncoming_green_purple",
    colors: [
      [0, 255, 0],
      [64, 0, 255],
    ],
  },
  {
    id: "led_oncoming_green_magenta",
    colors: [
      [0, 255, 0],
      [255, 0, 255],
    ],
  },

  {
    id: "led_oncoming_cyan_blue",
    colors: [
      [0, 255, 255],
      [0, 0, 255],
    ],
  },
  {
    id: "led_oncoming_cyan_purple",
    colors: [
      [0, 255, 255],
      [64, 0, 255],
    ],
  },
  {
    id: "led_oncoming_cyan_magenta",
    colors: [
      [0, 255, 255],
      [255, 0, 255],
    ],
  },

  {
    id: "led_oncoming_blue_purple",
    colors: [
      [0, 0, 255],
      [64, 0, 255],
    ],
  },
  {
    id: "led_oncoming_blue_magenta",
    colors: [
      [0, 0, 255],
      [255, 0, 255],
    ],
  },

  {
    id: "led_oncoming_purple_magenta",
    colors: [
      [64, 0, 255],
      [255, 0, 255],
    ],
  },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 12, tfps: 60, rpm: 3, ...screensaver.options },
  ...screensaver,
  priority: "INFORMATIVE",
  duration: false,
}));

function generate(colRGB1, colRGB2) {
  var frames = [];

  // for every frame...
  for (var fr = 0; fr < 24; fr++) {
    var frame = [];
    var pixnum1 = fr;
    var pixnum2 = 23 - fr;

    // for every pixel...
    for (var pixel = 0; pixel < 24; pixel++) {
      var color = [0, 0, 0];

      if (pixel == pixnum1) {
        color[0] += colRGB1[0];
        color[1] += colRGB1[1];
        color[2] += colRGB1[2];
      }
      if (pixel == pixnum2) {
        color[0] += colRGB2[0];
        color[1] += colRGB2[1];
        color[2] += colRGB2[2];
      }
      var colCheck = 1;
      if (color[0] > 255) {
        if (color[0] / 255 > colCheck) {
          colCheck = color[0] / 255;
        }
      }
      if (color[1] > 255) {
        if (color[1] / 255 > colCheck) {
          colCheck = color[1] / 255;
        }
      }
      if (color[2] > 255) {
        if (color[2] / 255 > colCheck) {
          colCheck = color[2] / 255;
        }
      }
      color[0] = Math.round(color[0] / colCheck);
      color[1] = Math.round(color[1] / colCheck);
      color[2] = Math.round(color[2] / colCheck);

      frame.push({ r: color[0], g: color[1], b: color[2] });
    }
    frames.push(frame);
  }
  return frames;
}
