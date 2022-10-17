module.exports = [
  { id: "led_solid_black", colors: [[0, 0, 0]] },
  { id: "led_solid_white", colors: [[255, 255, 255]] },
  { id: "led_solid_red", colors: [[255, 0, 0]] },
  { id: "led_solid_orange", colors: [[255, 85, 0]] },
  { id: "led_solid_yellow", colors: [[255, 255, 0]] },
  { id: "led_solid_green", colors: [[0, 255, 0]] },
  { id: "led_solid_cyan", colors: [[0, 255, 255]] },
  { id: "led_solid_blue", colors: [[0, 0, 255]] },
  { id: "led_solid_purple", colors: [[64, 0, 255]] },
  { id: "led_solid_magenta", colors: [[255, 0, 255]] },
].map((screensaver) => ({
  frames: generate(...screensaver.colors),
  options: { fps: 1, tfps: 60, rpm: 0, ...screensaver.options },
  priority: "INFORMATIVE",
  duration: false,
  ...screensaver,
}));

function generate(colRGB) {
  var frames = [];
  var frame = [];
  var color = colRGB;

  // for every pixel...
  for (var pixel = 0; pixel < 24; pixel++) {
    frame.push({ r: color[0], g: color[1], b: color[2] });
  }
  frames.push(frame);
  return frames;
}
