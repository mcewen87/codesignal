function matrixElementsSum(matrix) {
  const forbiddenColumns = new Set();
  let total = 0;
  matrix.forEach((row, i) => {
    row.forEach((element, j) => {
      if (element === 0) {
        forbiddenColumns.add(j);
      }
      if (!forbiddenColumns.has(j)) {
        total += element;
      }
    });
  });
  return total;
}