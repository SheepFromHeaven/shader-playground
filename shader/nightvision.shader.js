function nightVisionShader(pixel, index, pixels) {
  var newPixel = [0, 0, 0, 225];

  newPixel[CHANNEL.RED] = pixel[CHANNEL.RED] * 0.5;
  newPixel[CHANNEL.GREEN] = pixel[CHANNEL.GREEN] * 1.2;
  newPixel[CHANNEL.BLUE] = pixel[CHANNEL.BLUE] * 0.5;
  newPixel[CHANNEL.ALPHA] = pixel[CHANNEL.ALPHA];

  return newPixel;
}

var currentShader = nightVisionShader;
