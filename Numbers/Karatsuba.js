

function karatsuba(x,y) {
    if (x < 10 || x < 10) {
        return x * y;
    } 
    else {
        var m = Math.ceil(x.toString().length / 2),

        a = Math.floor(x/Math.pow(10,m)),
        b = x - ( a * Math.pow(10,m)),
        c = Math.floor(y/Math.pow(10,m)),
        d = y - ( c * Math.pow(10,m));

        console.log( 'a: ' + a + ' b: ' + b );
        console.log( 'c: ' + c + ' d: ' + d );

        var ac = karatsuba(a,c),
        bd = karatsuba(b,d),
        adbc = karatsuba(a+b,c+d) - ac - bd;

        console.log( ac + ' * 10^' + 2*m + ' + ' + adbc + ' * 10^' + m + ' + ' + bd);
    
        return ac * Math.pow(10, 2*m) + adbc * Math.pow(10, m) + bd;
    }
}


function Karatsuba(num1, num2) {
	if(parseInt(num1) < 10 || parseInt(num2) < 10) {
		return parseInt(num1) * parseInt(num2);
	}

	//calculate the size
	var num1_len = num1.toString().length,
		half_num1 = Math.floor( num1_len / 2 );
	var num2_len = num2.toString().length,
		half_num2 = Math.floor( num2_len / 2 );


	//var m = Math.max(num1_len, num2_len);
	var m = Math.ceil(num1_len / 2);

	var low1 = num1.toString().slice( half_num1,  num1_len );
	var low2 = num2.toString().slice( half_num2,  num2_len );
	var high1 = num1.toString().slice( 0, half_num1);
	var high2 = num2.toString().slice( 0, half_num2);

	//console.log( 'high1: ' + high1 + ' low1: ' + low1);
	//console.log( 'high2: ' + high2 + ' low2: ' + low2);

	var z0 = Karatsuba(low1, low2);
	var z1 = Karatsuba( ( parseInt(low1) + parseInt(high1)), ( parseInt(low2) + parseInt(high2)) );
	var z2 = Karatsuba( parseInt(high1), parseInt(high2) );

	//console.log(z2 + ' * 10^' + 2*m + ' + (' + z1 + ' - ' + z2 + ' - ' + z0 + ' ) * 10 ^ ' + m + ' + ' + z0 );

	return ((z2 * Math.pow(10, 2*m) ) + ((z1 - z2 - z0) * Math.pow( 10, m ) ) + z0);
}

