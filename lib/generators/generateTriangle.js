module.exports = [
  {
    id: "led_triangle_rgb",
    colors: [
      [255, 0, 0],
      [0, 255, 0],
      [0, 0, 255],
    ],
  },
  {
    id: "led_triangle_rgb_fast",
    colors: [
      [255, 0, 0],
      [0, 255, 0],
      [0, 0, 255],
    ],
    options: { rpm: 60 },
  },
  {
    id: "led_triangle_cmy",
    colors: [
      [0, 255, 255],
      [255, 0, 255],
      [255, 255, 0],
    ],
  },
  {
    id: "led_triangle_cmy_fast",
    colors: [
      [0, 255, 255],
      [255, 0, 255],
      [255, 255, 0],
    ],
    options: { rpm: 60 },
  },
  {
    id: "led_triangle_ryg",
    colors: [
      [255, 0, 0],
      [0, 255, 0],
      [255, 255, 0]
    ],
  },
  {
    id: "led_triangle_ryg_fast",
    colors: [
      [255, 0, 0],
      [0, 255, 0],
      [255, 255, 0]
    ],
    options: { rpm: 60 },
  },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 1, tfps: 60, rpm: 10, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB1, colRGB2, colRGB3) {
  var frames = [];
  var frame = [];

  // for every pixel...
  for (var pixel = 0; pixel < 24; pixel += 1) {
    var color = [0, 0, 0];
    if (pixel == 0) {
      color = colRGB1;
    }
    if (pixel == 8) {
      color = colRGB2;
    }
    if (pixel == 16) {
      color = colRGB3;
    }
    frame.push({ r: color[0], g: color[1], b: color[2] });
  }
  frames.push(frame);
  return frames;
}
