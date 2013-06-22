var a = 'aabbcbbbaedf';
a = 'ffeeeeeeeeereeddfdddddddddddbbbbbbbbbaaaaaa';
a = 'abbbbbbaddeeffff';

var max_seq = [];
var prev_seq = [];
var curr_seq = [];

for(var i = 0; i < a.length; i++) {
	console.log(a[i]);
	if(i > 0) {
		if(a[i] === a[i - 1]) {
			curr_seq.push(a[i]);
		}
		else if(a[i-1] == a[i + 1] || a[i] == a[i-2]) {
			curr_seq.push(a[i]);
		}
		else {
			console.log('not there');
			//swap
			prev_seq = curr_seq;
			curr_seq = [ a[i] ];
			if(prev_seq.length > max_seq.length) {
				max_seq = prev_seq;
			}
		}
	}
	else {
		curr_seq.push(a[i]);
	}
	if(curr_seq.length > max_seq.length) {
		max_seq = curr_seq;
	}
	console.log('curr_seq: ' + curr_seq);
}

console.log(max_seq);