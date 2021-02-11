module.exports = [
  {
    id: "led_stroboscope_white",
    colors: [
      [255, 255, 255],
      [0, 0, 0],
    ],
  },
  {
    id: "led_stroboscope_red",
    colors: [
      [255, 0, 0],
      [255, 255, 255],
    ],
  },
  {
    id: "led_stroboscope_orange",
    colors: [
      [255, 85, 0],
      [255, 255, 255],
    ],
  },
  {
    id: "led_stroboscope_yellow",
    colors: [
      [255, 255, 0],
      [255, 255, 255],
    ],
  },
  {
    id: "led_stroboscope_green",
    colors: [
      [0, 255, 0],
      [255, 255, 255],
    ],
  },
  {
    id: "led_stroboscope_cyan",
    colors: [
      [0, 255, 255],
      [255, 255, 255],
    ],
  },
  {
    id: "led_stroboscope_blue",
    colors: [
      [0, 0, 255],
      [255, 255, 255],
    ],
  },
  {
    id: "led_stroboscope_purple",
    colors: [
      [64, 0, 255],
      [255, 255, 255],
    ],
  },
  {
    id: "led_stroboscope_magenta",
    colors: [
      [255, 0, 255],
      [255, 255, 255],
    ],
  },
].map((screensaver) =>
  Object.assign(
    {
      generator: generateStroboscope,
      options: Object.assign(
        { fps: 12, tfps: 24, rpm: 0 },
        screensaver.options
      ),
    },
    screensaver
  )
);

function generateStroboscope(rgb_1, rgb_2) {
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
