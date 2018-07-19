function getPixelRowIndex(index, width) {
  var row = Math.floor(index / width);
  return row;
}

function getPixelColIndex(index, width) {
  var col = Math.floor(index % width);
  return col;
}
