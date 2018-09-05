function addBorder(picture) {
  var top = "*".repeat(picture[0].length + 2);
  for(i=0; i < picture.length; i++) {
    picture[i] = "*" + picture[i] + "*";
  }
  picture.unshift(top);
  picture.push(top);

 return picture;
}
