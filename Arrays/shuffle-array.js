
var a = [0,1,2,3,4,5,6,7,8,9];

function shuffle(b) {
	var shuffled = [];
	var rand;
	for(var i = 0; i < b.length; i++) {
		rand = Math.floor(Math.random()*i);
		shuffled[i] = shuffled[rand];
		shuffled[rand] = b[i];
	}
	return shuffled;
}

console.log( shuffle(a) );
