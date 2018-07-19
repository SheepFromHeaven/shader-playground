function diffuseShader(pixel, index, pixels) {
  var newPixel = [0, 0, 0, 225];

  var pixelValue = pixel[CHANNEL.RED]+pixel[CHANNEL.GREEN]+pixel[CHANNEL.BLUE];
  var factor = -25;

  if(pixelValue > 255 * 3 / 2) {
    factor *=-1;
  }

  newPixel[CHANNEL.RED] = pixel[CHANNEL.RED] + factor;
  newPixel[CHANNEL.GREEN] = pixel[CHANNEL.GREEN] + factor;
  newPixel[CHANNEL.BLUE] = pixel[CHANNEL.BLUE] + factor;
  newPixel[CHANNEL.ALPHA] = pixel[CHANNEL.ALPHA];

  return newPixel;
}

var currentShader = diffuseShader;
