exports.sleep = async function (ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
};

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

exports.hsvToRgbLow = function(h, s, v) {
    var r, g, b;
    var i;
    var f, p, q, t;

    // Make sure our arguments stay in-range
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s));
    v = Math.max(0, Math.min(100, v));

    // We accept saturation and value arguments from 0 to 100 because that's
    // how Photoshop represents those values. Internally, however, the
    // saturation and value are calculated from a range of 0 to 1. We make
    // That conversion here.
    s /= 100;
    v /= 100;

    if(s == 0) {
        // Achromatic (grey)
        r = g = b = v;
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    h /= 60; // sector 0 to 5
    i = Math.floor(h);
    f = h - i; // factorial part of h
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));

    switch(i) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;

        case 1:
            r = q;
            g = v;
            b = p;
            break;

        case 2:
            r = p;
            g = v;
            b = t;
            break;

        case 3:
            r = p;
            g = q;
            b = v;
            break;

        case 4:
            r = t;
            g = p;
            b = v;
            break;

        default: // case 5:
            r = v;
            g = p;
            b = q;
    }

    return [Math.round(r * 25), Math.round(g * 25), Math.round(b * 25)];
}

exports.getDifference = function(array1, array2) {
    return array1.filter(object1 => {
      return !array2.some(object2 => {
        return object1.name === object2.name;
      });
    });
  }