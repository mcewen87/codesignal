function chessBoardCellColor(cell1, cell2) {
	var placeOne = [];
	var placeTwo = [];

	var key = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
	var board = [
		[true, false, true, false, true, false, true, false],
		[false, true, false, true, false, true, false, true],
		[true, false, true, false, true, false, true, false],
		[false, true, false, true, false, true, false, true],
		[true, false, true, false, true, false, true, false],
		[false, true, false, true, false, true, false, true],
		[true, false, true, false, true, false, true, false],
		[false, true, false, true, false, true, false, true],
	];

	for (i = 0; i < cell1.length; i++) {
		placeOne.push(cell1[i]);
	}

	for (i = 0; i < cell2.length; i++) {
		placeTwo.push(cell2[i]);
	}

	valueOne = board[parseInt(placeOne[1], 10) - 1][key.indexOf(placeOne[0])];
	valueTwo = board[parseInt(placeTwo[1], 10) - 1][key.indexOf(placeTwo[0])];
	return valueOne === valueTwo;
}