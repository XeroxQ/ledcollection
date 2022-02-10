module.exports = [
  {
    id: "led_newtonian_red_orange",
    colors: [
      [255, 0, 0],
      [255, 85, 0],
    ],
  },
  {
    id: "led_newtonian_red_yellow",
    colors: [
      [255, 0, 0],
      [255, 255, 0],
    ],
  },
  {
    id: "led_newtonian_red_green",
    colors: [
      [255, 0, 0],
      [0, 255, 0],
    ],
  },
  {
    id: "led_newtonian_red_cyan",
    colors: [
      [255, 0, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "led_newtonian_red_blue",
    colors: [
      [255, 0, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_newtonian_red_purple",
    colors: [
      [255, 0, 0],
      [64, 0, 255],
    ],
  },
  {
    id: "led_newtonian_red_magenta",
    colors: [
      [255, 0, 0],
      [255, 0, 255],
    ],
  },

  {
    id: "led_newtonian_orange_yellow",
    colors: [
      [255, 85, 0],
      [255, 255, 0],
    ],
  },
  {
    id: "led_newtonian_orange_green",
    colors: [
      [255, 85, 0],
      [0, 255, 0],
    ],
  },
  {
    id: "led_newtonian_orange_cyan",
    colors: [
      [255, 85, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "led_newtonian_orange_blue",
    colors: [
      [255, 85, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_newtonian_orange_purple",
    colors: [
      [255, 85, 0],
      [64, 0, 255],
    ],
  },
  {
    id: "led_newtonian_orange_magenta",
    colors: [
      [255, 85, 0],
      [255, 0, 255],
    ],
  },

  {
    id: "led_newtonian_yellow_green",
    colors: [
      [255, 255, 0],
      [0, 255, 0],
    ],
  },
  {
    id: "led_newtonian_yellow_cyan",
    colors: [
      [255, 255, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "led_newtonian_yellow_blue",
    colors: [
      [255, 255, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_newtonian_yellow_purple",
    colors: [
      [255, 255, 0],
      [64, 0, 255],
    ],
  },
  {
    id: "led_newtonian_yellow_magenta",
    colors: [
      [255, 255, 0],
      [255, 0, 255],
    ],
  },

  {
    id: "led_newtonian_green_cyan",
    colors: [
      [0, 255, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "led_newtonian_green_blue",
    colors: [
      [0, 255, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_newtonian_green_purple",
    colors: [
      [0, 255, 0],
      [64, 0, 255],
    ],
  },
  {
    id: "led_newtonian_green_magenta",
    colors: [
      [0, 255, 0],
      [255, 0, 255],
    ],
  },

  {
    id: "led_newtonian_cyan_blue",
    colors: [
      [0, 255, 255],
      [0, 0, 255],
    ],
  },
  {
    id: "led_newtonian_cyan_purple",
    colors: [
      [0, 255, 255],
      [64, 0, 255],
    ],
  },
  {
    id: "led_newtonian_cyan_magenta",
    colors: [
      [0, 255, 255],
      [255, 0, 255],
    ],
  },

  {
    id: "led_newtonian_blue_purple",
    colors: [
      [0, 0, 255],
      [64, 0, 255],
    ],
  },
  {
    id: "led_newtonian_blue_magenta",
    colors: [
      [0, 0, 255],
      [255, 0, 255],
    ],
  },

  {
    id: "led_newtonian_purple_magenta",
    colors: [
      [64, 0, 255],
      [255, 0, 255],
    ],
  },
  {
    id: "led_newtonian_red_yellow_green",
    colors: [
        [255, 0, 0],
        [0, 255, 0],
        [255, 255, 0],
    ],
  },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 20, tfps: 60, rpm: 0, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB1, colRGB2) {
  var frames = [];
  var pixnum1 = 0;
  var pixnum2 = 12;

  // for every frame...
  for (var fr = 1; fr < 44; fr++) {
    var frame = [];

    if (fr <= 11) {
      pixnum1 = fr;
      pixnum2 = 12;
    } else if (fr >= 12 && fr <= 22) {
      pixnum1 = 12;
      pixnum2 = fr + 1;
    } else if (fr >= 23 && fr <= 33) {
      pixnum1 = 12;
      pixnum2 = 46 - fr;
    } else if (fr >= 34 && fr <= 44) {
      pixnum1 = 45 - fr;
      pixnum2 = 12;
    }
    pixnum1 += 9;
    pixnum2 += 9;
    if (pixnum1 > 23) {
      pixnum1 -= 24;
    }
    if (pixnum2 > 23) {
      pixnum2 -= 24;
    }

    // for every pixel...
    for (var pixel = 0; pixel < 24; pixel++) {
      var color = [0, 0, 0];
      if (pixel == pixnum1) {
        color = colRGB2;
      }
      if (pixel == pixnum2) {
        color = colRGB1;
      }

      frame.push({ r: color[0], g: color[1], b: color[2] });
    }
    frames.push(frame);
  }
  return frames;
}
