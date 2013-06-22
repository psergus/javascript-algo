var a = '01010110';
a = '11001111';

function flip_bin(b) {
	console.log('got: ' + b);
	if(b.length == 1) {
		return b;
	}

	var left, right = null;

	left = b.slice( 0, Math.floor(b.length/2));
	if(b.length % 2) {
		right = b.slice( Math.floor( b.length/2 ) + 1, b.length );
	}
	else {
		right = b.slice( Math.floor( b.length/2 ), b.length );
	}

	console.log('left: ' + left + ' and right: ' + right);

	return [].concat( flip_bin(right) , flip_bin(left) );
}

var flipped = flip_bin(a);
console.log(flipped);