function newShader(currentPixel, index, pixels, imgWidth, imgHeight) {
  var newPixel = [0, 0, 0, 225];

  var factorY;
  if(getPixelColIndex(index, imgWidth) < imgWidth / 2) {
    factorY = getPixelColIndex(index, imgWidth);
  } else {
    factorY = imgWidth/2 - (getPixelColIndex(index, imgWidth) % (imgWidth / 2));
  }

  var factorX;
  if(getPixelRowIndex(index, imgWidth) < imgHeight / 2) {
    factorX = getPixelRowIndex(index, imgWidth);
  } else {
    factorX = imgHeight/2 - (getPixelRowIndex(index, imgWidth) % (imgHeight / 2));
  }

  var factor = 255 - factorX * 0.7 - factorY * 0.7 > 0 ? 255 - factorX * 0.7 - factorY * 0.7 : 0;

  newPixel[CHANNEL.RED] = currentPixel[CHANNEL.RED] - factor;
  newPixel[CHANNEL.GREEN] = currentPixel[CHANNEL.GREEN] - factor;
  newPixel[CHANNEL.BLUE] = currentPixel[CHANNEL.BLUE] - factor

  return newPixel;
}

var currentShader = newShader;
