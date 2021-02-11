exports.getRandomColors = function () {
  var col = [],
    c = [0, 0, 0];
  for (var i = 0; i < 109; i++) {
    c = [0, 0, 0];
    while (c[0] == c[1] && c[1] == c[2]) {
      c[0] = Math.floor(Math.random() * 4) * 85;
      c[1] = Math.floor(Math.random() * 4) * 85;
      c[2] = Math.floor(Math.random() * 4) * 85;
    }
    if (c[0] > 0 && c[1] > 0 && c[2] > 0) {
      c[Math.floor(Math.random() * 3)] = 0;
    }
    col.push(c);
  }
  return col;
};

exports.getColorFlow = function (nStep) {
  var fStep = 255 / (nStep / 6),
    col = [],
    r = 255,
    g = 0,
    b = 0;
  col.push([r, g, b]);
  while (g < 255) {
    g += fStep;
    col.push([Math.round(r), Math.round(g), Math.round(b)]);
  }
  while (r > 0) {
    r -= fStep;
    col.push([Math.round(r), Math.round(g), Math.round(b)]);
  }
  while (b < 255) {
    b += fStep;
    col.push([Math.round(r), Math.round(g), Math.round(b)]);
  }
  while (g > 0) {
    g -= fStep;
    col.push([Math.round(r), Math.round(g), Math.round(b)]);
  }
  while (r < 255) {
    r += fStep;
    col.push([Math.round(r), Math.round(g), Math.round(b)]);
  }
  while (b > 0) {
    b -= fStep;
    col.push([Math.round(r), Math.round(g), Math.round(b)]);
  }
  return col;
};
