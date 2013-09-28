/*
In the 2020 grid below, four numbers along a diagonal line have been marked in red.
The product of these numbers is 26  63  78  14 = 1788696.
What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 2020 grid?
*/

var grid = [];
grid[00] = [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08];
grid[01] = [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00];
grid[02] = [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65];
grid[03] = [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91];
grid[04] = [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80];
grid[05] = [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50];
grid[06] = [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70];
grid[07] = [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21];
grid[08] = [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72];
grid[09] = [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95];
grid[10] = [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92];
grid[11] = [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57];
grid[12] = [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58];
grid[13] = [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40];
grid[14] = [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66];
grid[15] = [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69];
grid[16] = [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36];
grid[17] = [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16];
grid[18] = [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54];
grid[19] = [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48];


/*
//first, lets find how many diagonals with at least 4 numbers are there
var n = grid.length;
var num_len = 4; //4 numbers in diagonal;
var diagonals = 2 * n - 2 * num_len - 3;
console.log('matrix size is: ' + n + ' max diagonals: ' + diagonals);

//lets start going diagonals from the bottom left corner and up
var max_product = 0;
var si = n - num_len;
//console.log('si: ' + si);
var J = 0;
for( l = diagonals; l > 0; l--) {
	//console.log( 'diagonal: ' + l);
	console.log('---------l: ' + l + 'si: ' + si + ' J: ' + J);
	if(si < 0) {
		si = 0;
	}
	for(var i = si, j = J; i <= n - num_len && j < n - num_len; i++, j++) {
		var product = 1;
		var seq = [];
		for(k = 0; k < num_len; k++) {
			product *= grid[i + k][j + k];
			seq.push( grid[i + k][j + k] );
			//console.log( 'i: ' + (i+k) + ' j: ' + (j+k));
		}
		console.log( 'check: ' + seq);
		//max_product = (max_product < product)? product : max_product;
		if(max_product < product) {
			max_product = product;
			console.log('Max seq: ' + seq + ' i: ' + i + ' j: ' + j);
		}
	}
	si -= 1; //move vertically
	if(si < 0) {
		J += 1; //start moving horizontally
	}
	//if(l < 12) break;
}

console.log(max_product);
*/

var max_product = 0;
for(var i = 0; i < grid.length; i++) {
	for(var j =0; j < grid.length; j++) {
		var right = down = leftdown = rightdown = 1;
		for(var k = 0; k < 4; k++) {
			//console.log('i: ' + i + ' j: ' + j + ' k: ' + k + ' right: ' + right + ' down: ' + down + ' rightdown: ' + rightdown + ' leftdown: ' + leftdown);
			right *= ((j+k) < grid.length)? grid[i][j+k] : 0;
			down *= ((i+k) < grid.length)? grid[i+k][j] : 0;
			rightdown *= ((j+k) < grid.length && (i+k) < grid.length)? grid[i+k][j+k] : 0;
			leftdown *= ((j-k) > 0 && (i+k) < grid.length)? grid[i+k][j-k] : 0;
		}
		//console.log('right: ' + right + ' down: ' + down + ' rightdown: ' + rightdown + ' leftdown: ' + leftdown);
		max_product = Math.max(max_product, right, down, leftdown, rightdown);
	}
}
console.log(max_product);
