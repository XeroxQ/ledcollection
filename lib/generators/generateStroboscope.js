module.exports = [
  {
    id: "led_stroboscope_white",
    colors: [
      [255, 255, 255],
      [50, 50, 50],
    ],
  },
  {
    id: "led_stroboscope_red",
    colors: [
      [255, 0, 0],
      [50, 0, 0],
    ],
  },
  {
    id: "led_stroboscope_orange",
    colors: [
      [255, 85, 0],
      [50, 35, 0],
    ],
  },
  {
    id: "led_stroboscope_yellow",
    colors: [
      [255, 255, 0],
      [50, 50, 0],
    ],
  },
  {
    id: "led_stroboscope_green",
    colors: [
      [0, 255, 0],
      [0, 50, 0],
    ],
  },
  {
    id: "led_stroboscope_cyan",
    colors: [
      [0, 255, 255],
      [0, 50, 50],
    ],
  },
  {
    id: "led_stroboscope_blue",
    colors: [
      [0, 0, 255],
      [0, 0, 50],
    ],
  },
  {
    id: "led_stroboscope_purple",
    colors: [
      [64, 0, 255],
      [10, 0, 50],
    ],
  },
  {
    id: "led_stroboscope_magenta",
    colors: [
      [255, 0, 255],
      [50, 0, 50],
    ],
  },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 12, tfps: 24, rpm: 0, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(rgb_1, rgb_2) {
  let frames = [];
  for (let frameIndex = 0; frameIndex < 24; frameIndex++) {
    let frame = [];
    for (let pixelIndex = 0; pixelIndex < 24; pixelIndex++) {
      if (frameIndex % 6 == 0) {
        frame.push({ r: rgb_1[0], g: rgb_1[1], b: rgb_1[2] });
      } else {
        frame.push({ r: rgb_2[0], g: rgb_2[1], b: rgb_2[2] });
      }
    }
    frames.push(frame);
  }
  return frames;
}
