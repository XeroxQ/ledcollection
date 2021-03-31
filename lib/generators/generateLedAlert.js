module.exports = [
  {
    id: "white_alert",
    colors: [
      [0, 0, 0],
      [255, 255, 255],
    ],
  },
  {
    id: "red_alert",
    colors: [
      [0, 0, 0],
      [255, 0, 0],
    ],
  },
  {
    id: "orange_alert",
    colors: [
      [0, 0, 0],
      [255, 85, 0],
    ],
  },
  {
    id: "yellow_alert",
    colors: [
      [0, 0, 0],
      [255, 255, 0],
    ],
  },
  {
    id: "green_alert",
    colors: [
      [0, 0, 0],
      [0, 255, 0],
    ],
  },
  {
    id: "cyan_alert",
    colors: [
      [0, 0, 0],
      [0, 255, 255],
    ],
  },
  {
    id: "blue_alert",
    colors: [
      [0, 0, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "purple_alert",
    colors: [
      [0, 0, 0],
      [64, 0, 255],
    ],
  },
  {
    id: "magenta_alert",
    colors: [
      [0, 0, 0],
      [255, 0, 255],
    ],
  },
  {
    id: "red_blue_alert",
    colors: [
      [255, 0, 0],
      [0, 0, 255],
    ],
  },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 1, tfps: 4, rpm: 60, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(rgb_1, rgb_2) {
  var frames = [];
  var frame = [];
  var color = [];

  // for every pixel...
  for (var pixel = 0; pixel < 24; pixel++) {
    if (pixel < 12) {
      color = rgb_1;
    } else {
      color = rgb_2;
    }
    frame.push({ r: color[0], g: color[1], b: color[2] });
  }
  frames.push(frame);
  return frames;
}
