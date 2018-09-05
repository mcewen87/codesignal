function shapeArea(n) {
var area = 1; 
  for (i=0; i < n; i++) {
    area+= (i*4); 
  }
  return area;  
}

shapeArea(4); 