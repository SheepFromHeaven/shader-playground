var currentShader;
var prelImg;

var imageUrl = "https://images.pexels.com/photos/981062/pexels-photo-981062.jpeg?auto=compress&cs=tinysrgb&h=400&w=710";

window.CHANNEL = {
  RED: 0,
  GREEN: 1,
  BLUE: 2,
  ALPHA: 3
};

const $updateButton = document.getElementById("update");
$updateButton.addEventListener("click", function(ev) {
  ev.preventDefault();
  updateShader();
});

function updateShader() {
  const imageUrl = document.getElementById("image").value;
  const $textarea = document.getElementById("shader");
  const shaderCode = $textarea.textContent;
  const theShader = `function newShader(currentPixel, index, pixels, imgWidth, imgHeight) {
		const newPixel = [0, 0, 0, 255];
		
		${shaderCode};
		
		return newPixel;
	};
	
	currentShader = newShader;
	`;
  var oldScript = document.getElementById("scriptContainer");
  var newScript;

  if (oldScript) {
    oldScript.parentNode.removeChild(oldScript);
  }

  newScript = document.createElement("script");
  newScript.id = "scriptContainer";
  newScript.text = theShader;
  document.body.appendChild(newScript);

  loadImage(imageUrl, function(img) {
    createCanvas(img.width, img.height);
    image(transform(img), 0, 0, img.width, img.height);
		img.loadPixels();
	});
}

function setup() {
  updateShader();
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
    var newPixel = pixelShader(img, pixel, i, pixelsArray);
    img.pixels[i * 4 + CHANNEL.RED] = newPixel[CHANNEL.RED];
    img.pixels[i * 4 + CHANNEL.GREEN] = newPixel[CHANNEL.GREEN];
    img.pixels[i * 4 + CHANNEL.BLUE] = newPixel[CHANNEL.BLUE];
    img.pixels[i * 4 + CHANNEL.ALPHA] = newPixel[CHANNEL.ALPHA];
  });
}

function pixelShader(img, pixel, index, pixels) {
  return currentShader(pixel, index, pixels, img.width, img.height);
}
