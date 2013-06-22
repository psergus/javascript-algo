var a = [6, 5, 3, 1, 8, 7, 2, 4, 9, 9];

function merge_sort(u) {
	//console.log('received u: ' + u)

	if(u.length === 1) return u;

	var left = merge_sort( u.slice(0, Math.floor(u.length/2)) );
	var right = merge_sort( u.slice(Math.floor(u.length/2), u.length) );

	var result = [];
	while(left.length || right.length) {
		if(left.length && right.length) {
			if(left[0] <= right[0]) {
				result.push( left.shift() );
			}
			else {
				result.push( right.shift() );
			}
		}
		else if( left.length) {
			result.push( left.shift() );
		}
		else {
			result.push( right.shift() );
		}
	}
	return result;

}

console.log('unsorted: ' + a);
var sorted = merge_sort(a);
console.log('sorted: ' + sorted);