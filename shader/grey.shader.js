function newShader(currentPixel, index, pixels, imgWidth, imgHeight) {
    var newPixel = [0, 0, 0, 225];

    const grey = (currentPixel[CHANNEL.RED] + currentPixel[CHANNEL.GREEN] + currentPixel[CHANNEL.BLUE]) / 3;

    newPixel[CHANNEL.RED] = grey;
    newPixel[CHANNEL.GREEN] = grey;
    newPixel[CHANNEL.BLUE] = grey;
    newPixel[CHANNEL.ALPHA] = currentPixel[CHANNEL.ALPHA];

    return newPixel;
}

var currentShader = newShader;
