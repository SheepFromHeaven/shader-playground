var prelImg;

var CHANNEL = {
    RED: 0,
    GREEN: 1,
    BLUE: 2,
    ALPHA: 3
}

function preload() {
    prelImg = loadImage("https://images.pexels.com/photos/981062/pexels-photo-981062.jpeg?auto=compress&cs=tinysrgb&h=400&w=710");
}

function setup() {
    createCanvas(prelImg.width, prelImg.height);

    loadImage('https://images.pexels.com/photos/981062/pexels-photo-981062.jpeg?auto=compress&cs=tinysrgb&h=400&w=710', function (img) {
        image(transform(img), 0, 0, prelImg.width, prelImg.height);
    });

    prelImg.loadPixels();
}

function transform(img) {
    img.loadPixels();
    applyPixelsArrayTo(toPixelArray(img.pixels), img);
    img.updatePixels();
    return img;
}

function toPixelArray(uInt) {
    var pixelsArray = [];
    for (var i = 0; i <= uInt.length; i += 4) {
        pixelsArray[i / 4] = [
            uInt[i + CHANNEL.RED],
            uInt[i + CHANNEL.GREEN],
            uInt[i + CHANNEL.BLUE],
            uInt[i + CHANNEL.ALPHA]
        ];
    }
    return pixelsArray;
}

function applyPixelsArrayTo(pixelsArray, img) {
    pixelsArray.forEach((pixel, i) => {
      var newPixel = pixelShader(pixel, i , pixelsArray)
        img.pixels[i * 4 + CHANNEL.RED] = newPixel[CHANNEL.RED];
        img.pixels[i * 4 + CHANNEL.GREEN] = newPixel[CHANNEL.GREEN];
        img.pixels[i * 4 + CHANNEL.BLUE] = newPixel[CHANNEL.BLUE];
        img.pixels[i * 4 + CHANNEL.ALPHA] = newPixel[CHANNEL.ALPHA];
    });
}

function pixelShader(pixel, index, pixels) {
  return currentShader(pixel, index, pixels, prelImg.width, prelImg.height);
}
