
var a = 'thisisatestrewkrhkefiusdyfdsjfksdfhksjdhfksdfsfs'; // 'APBCADCQER'; // 'thisisatest';
var b = 'testing123testingekjrlkehfdshkfjhweuirywie'; // 'RASBTAUCVE'; // 'testing123testing';


function lcs(x, y) {
	var c = [], 
		b = [],
		i = 0, //columns. x leters 
		j = 0; //rows. y letters
	//initialize array
	for(j = 0; j <= y.length; j++) {
		c[j] = [0]
		b[j] = ['.']
		for(i = 0; i <= x.length; i++) {
			c[j][i] = 0
			b[j][i] = 0
		}
	}
	//console.log(b)

	for(j = 1; j <= y.length; j++) {
		var Sy = y[j-1];
		for(i = 1; i <= x.length; i++) {
			var Sx = x[i-1];
			if(Sy === Sx) {
				c[j][i] =  c[j-1][i-1] + 1
				b[j][i] = 0 //upleft
				//console.log(' i: ' + i + ' j: ' + j + ' Sy: ' + Sy + ' Sx: ' + Sx)
			}
			else{
				var up = c[j-1][i]
				var left = c[j][i-1]
				c[j][i] = Math.max( up, left )
				if(up >= left) {
					b[j][i] = 1 //up
				}
				else {
					b[j][i] = -1 //left
				}
			}
		}
	}

	lcs = []
	j = y.length; i = x.length;
	while(j > 0 && i > 0) {
		//console.log(' i: ' + i + ' j: ' + j)
		if(b[j][i] == 0) {
			lcs.unshift(x[i-1]);
			i -= 1;
			j -= 1;
		}
		else if(b[j][i] == 1) {
			//up
			j -= 1;
		}
		else {
			//left
			i -= 1;
		}
	}

	//console.log(c)
	//console.log(b)
	return lcs.join('');
}

console.log( lcs(a,b) )

