function newShader(currentPixel, index, pixels, imgWidth, imgHeight) {
  var newPixel = [0, 0, 0, 225];

  newPixel[CHANNEL.RED] = currentPixel[CHANNEL.RED];
  newPixel[CHANNEL.GREEN] = currentPixel[CHANNEL.GREEN];
  newPixel[CHANNEL.BLUE] = currentPixel[CHANNEL.BLUE];
  newPixel[CHANNEL.ALPHA] = currentPixel[CHANNEL.ALPHA];

  return newPixel;
}

var currentShader = newShader;
