var stream = require('stream');
var util = require('util')

var writestream = new stream.Stream();
writestream.current = null;
writestream.cnt = 0;
writestream.writable = true;
writestream.write = function (data) {
	//console.log('writestream data: ' + data);
	if(writestream.current == data) {
		writestream.cnt++;
	}
	else if(writestream.cnt <= 0){
		writestream.cnt = 0;
		writestream.current = data;
	}
	else {
		writestream.cnt--;
	}
	return (writestream.cnt)? writestream.current : null;
}
writestream.end = function (data) {
	if (arguments.length) writestream.write(data);
	writestream.writable = false;
	console.log('current majority: ' + writestream.current);
}
//writestream.write({number: 1})

var readstream = new stream.Stream()
readstream.readable = true

readstream.on('data', function(data) {
	var ready = writestream.write(data)
	if (ready === false) {
		this.pause()
		writestream.once('drain', this.resume.bind(this))
	}
});
readstream.on('end', function() {
	writestream.end()
});



var s = '113314361111590114311111678390';
s = '11234161711';

for(var i = 1; i < s.length; i++) {
	writestream.write(s[i]);
}
writestream.end();

/*
var current = s[0];
var cnt = 1;
for(var i = 1; i < s.length; i++) {
	if(current == s[i]) {
		cnt++;
	}
	else if(cnt <= 0){
		cnt = 0;
		current = s[i];
	}
	else {
		cnt--;
	}
	console.log('s[i]: ' + s[i] + ' current: ' + current + ' cnt: ' + cnt);
}
*/