module.exports = [
  {
    id: "led_eyes_white",
    colors: [
      [255, 255, 255],
      [255, 255, 255],
    ],
  },
  {
    id: "led_eyes_red",
    colors: [
      [255, 0, 0],
      [255, 0, 0],
    ],
  },
  {
    id: "led_eyes_orange",
    colors: [
      [255, 85, 0],
      [255, 85, 0],
    ],
  },
  {
    id: "led_eyes_yellow",
    colors: [
      [255, 255, 0],
      [255, 255, 0],
    ],
  },
  {
    id: "led_eyes_green",
    colors: [
      [0, 255, 0],
      [0, 255, 0],
    ],
  },
  {
    id: "led_eyes_cyan",
    colors: [
      [0, 255, 255],
      [0, 255, 255],
    ],
  },
  {
    id: "led_eyes_blue",
    colors: [
      [0, 0, 255],
      [0, 0, 255],
    ],
  },
  {
    id: "led_eyes_purple",
    colors: [
      [64, 0, 255],
      [64, 0, 255],
    ],
  },
  {
    id: "led_eyes_magenta",
    colors: [
      [255, 0, 255],
      [255, 0, 255],
    ],
  },

  {
    id: "led_eyes_red_yellow",
    colors: [
      [255, 255, 0],
      [255, 0, 0],
    ],
  },
  {
    id: "led_eyes_red_green",
    colors: [
      [0, 255, 0],
      [255, 0, 0],
    ],
  },
  {
    id: "led_eyes_red_cyan",
    colors: [
      [0, 255, 255],
      [255, 0, 0],
    ],
  },
  {
    id: "led_eyes_red_blue",
    colors: [
      [0, 0, 255],
      [255, 0, 0],
    ],
  },
  {
    id: "led_eyes_red_magenta",
    colors: [
      [255, 0, 255],
      [255, 0, 0],
    ],
  },

  {
    id: "led_eyes_yellow_red",
    colors: [
      [255, 0, 0],
      [255, 255, 0],
    ],
  },
  {
    id: "led_eyes_yellow_green",
    colors: [
      [0, 255, 0],
      [255, 255, 0],
    ],
  },
  {
    id: "led_eyes_yellow_cyan",
    colors: [
      [0, 255, 255],
      [255, 255, 0],
    ],
  },
  {
    id: "led_eyes_yellow_blue",
    colors: [
      [0, 0, 255],
      [255, 255, 0],
    ],
  },
  {
    id: "led_eyes_yellow_magenta",
    colors: [
      [255, 0, 255],
      [255, 255, 0],
    ],
  },

  {
    id: "led_eyes_green_red",
    colors: [
      [255, 0, 0],
      [0, 255, 0],
    ],
  },
  {
    id: "led_eyes_green_yellow",
    colors: [
      [255, 255, 0],
      [0, 255, 0],
    ],
  },
  {
    id: "led_eyes_green_cyan",
    colors: [
      [0, 255, 255],
      [0, 255, 0],
    ],
  },
  {
    id: "led_eyes_green_blue",
    colors: [
      [0, 0, 255],
      [0, 255, 0],
    ],
  },
  {
    id: "led_eyes_green_magenta",
    colors: [
      [255, 0, 255],
      [0, 255, 0],
    ],
  },

  {
    id: "led_eyes_cyan_red",
    colors: [
      [255, 0, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "led_eyes_cyan_yellow",
    colors: [
      [255, 255, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "led_eyes_cyan_green",
    colors: [
      [0, 255, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "led_eyes_cyan_blue",
    colors: [
      [0, 0, 255],
      [0, 255, 255],
    ],
  },
  {
    id: "led_eyes_cyan_magenta",
    colors: [
      [255, 0, 255],
      [0, 255, 255],
    ],
  },

  {
    id: "led_eyes_blue_red",
    colors: [
      [255, 0, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_eyes_blue_yellow",
    colors: [
      [255, 255, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_eyes_blue_green",
    colors: [
      [0, 255, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_eyes_blue_cyan",
    colors: [
      [0, 255, 255],
      [0, 0, 255],
    ],
  },
  {
    id: "led_eyes_blue_magenta",
    colors: [
      [255, 0, 255],
      [0, 0, 255],
    ],
  },

  {
    id: "led_eyes_magenta_red",
    colors: [
      [255, 0, 0],
      [255, 0, 255],
    ],
  },
  {
    id: "led_eyes_magenta_yellow",
    colors: [
      [255, 255, 0],
      [255, 0, 255],
    ],
  },
  {
    id: "led_eyes_magenta_green",
    colors: [
      [0, 255, 0],
      [255, 0, 255],
    ],
  },
  {
    id: "led_eyes_magenta_cyan",
    colors: [
      [0, 255, 255],
      [255, 0, 255],
    ],
  },
  {
    id: "led_eyes_magenta_blue",
    colors: [
      [0, 0, 255],
      [255, 0, 255],
    ],
  },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 2, tfps: 60, rpm: 0, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB1, colRGB2) {
  var frames = [];
  var color = [];
  var pixcenter = 21,
    pixdest = 0,
    pixnum = [];
  var blinkOn = false;
  var nFrame = 120;

  if (
    colRGB1[0] == colRGB2[0] &&
    colRGB1[1] == colRGB2[1] &&
    colRGB1[2] == colRGB2[2]
  ) {
    if (colRGB1[0] == 255 && colRGB1[1] == 255 && colRGB1[2] == 255) {
      var colRGB2 = [4, 4, 4];
      var colRGB3 = [2, 2, 2];
    } else {
      var colRGB2 = [
        Math.round((255 - colRGB1[0]) / 64),
        Math.round((255 - colRGB1[1]) / 64),
        Math.round((255 - colRGB1[2]) / 64),
      ];
      var colRGB3 = [
        Math.round((255 - colRGB1[0]) / 128),
        Math.round((255 - colRGB1[1]) / 128),
        Math.round((255 - colRGB1[2]) / 128),
      ];
    }
    var colRGB4 = [
      Math.round(colRGB1[0] / 32),
      Math.round(colRGB1[1] / 32),
      Math.round(colRGB1[2] / 32),
    ];
  } else {
    var colDiv1 = 0;
    for (var i = 0; i < 3; i++) {
      if (colRGB1[i] > 0) {
        colDiv1++;
      }
    }
    var colDiv2 = 0;
    for (var i = 0; i < 3; i++) {
      if (colRGB2[i] > 0) {
        colDiv2++;
      }
    }

    if (colDiv1 == colDiv2) {
      colDiv1 = 1;
      colDiv2 = 2;
    } else {
      colDiv2++;
    }

    colRGB1 = [
      Math.round(colRGB1[0] / Math.pow(2, colDiv1)),
      Math.round(colRGB1[1] / Math.pow(2, colDiv1)),
      Math.round(colRGB1[2] / Math.pow(2, colDiv1)),
    ];
    colRGB2 = [
      Math.round(colRGB2[0] / Math.pow(2, colDiv2)),
      Math.round(colRGB2[1] / Math.pow(2, colDiv2)),
      Math.round(colRGB2[2] / Math.pow(2, colDiv2)),
    ];

    var colRGB3 = [
      Math.round(colRGB2[0] / 1.5),
      Math.round(colRGB2[1] / 1.5),
      Math.round(colRGB2[2] / 1.5),
    ];
    var colRGB4 = [
      Math.round(colRGB2[0] / 8),
      Math.round(colRGB2[1] / 8),
      Math.round(colRGB2[2] / 8),
    ];
  }

  // for every frame...
  for (var fr = 0; fr < nFrame; fr++) {
    var frame = [];

    // if at destination, set new center destination... or not
    if (!blinkOn && pixdest == 0 && Math.random() >= 0.7) {
      pixdest = 21 + Math.round(Math.random() * 6 - 3);
    }
    // move center toward destination
    if (pixdest > 0) {
      blinkOn = false;

      if (pixcenter > pixdest) {
        pixcenter -= 1;
      } else if (pixcenter < pixdest) {
        pixcenter += 1;
      } else {
        pixdest = 0;
      } // set arrived at the destination
    } else {
      if (blinkOn) {
        blinkOn = false;
      } else {
        blinkOn = Math.random() < 0.1;
      }
    }
    // last frames: move to start position
    if (fr >= nFrame - 3) {
      pixdest = 21;
    }

    // get eye pixels
    for (var i = 1; i < 7; i++) {
      if (Math.floor(i / 2) * 2 == i) {
        pixnum[i] = pixcenter - 1 - Math.floor((i + 1) / 2);
        //if( i == 6 ){ pixnum[i]--; }
      } else {
        pixnum[i] = pixcenter + 1 + Math.floor((i + 1) / 2);
        //if( i == 5 ){ pixnum[i]++; }
      }
      if (pixnum[i] > 23) {
        pixnum[i] -= 24;
      } else if (pixnum[i] < 0) {
        pixnum[i] += 24;
      }
    }

    // for every pixel...
    for (var pixel = 0; pixel < 24; pixel++) {
      if (pixel == pixnum[1] || pixel == pixnum[2]) {
        // eyes center side
        if (blinkOn) {
          color = colRGB4;
        } else {
          color = colRGB3;
        }
      } else if (pixel == pixnum[3] || pixel == pixnum[4]) {
        // eyes center
        if (blinkOn) {
          color = [0, 0, 0];
        } else {
          color = colRGB1;
        }
      } else if (pixel == pixnum[5] || pixel == pixnum[6]) {
        // eyes outside
        if (blinkOn) {
          color = colRGB4;
        } else {
          color = colRGB2;
        }
      } else {
        color = [0, 0, 0];
      }

      frame.push({ r: color[0], g: color[1], b: color[2] });
    }
    frames.push(frame);
  }
  return frames;
}
