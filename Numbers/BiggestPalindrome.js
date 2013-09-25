/*
*A palindromic number reads the same both ways. The largest palindrome made *from the product of two 2-digit numbers is 9009 = 91 99.
*
*Find the largest palindrome made from the product of two 3-digit numbers.
*/
var isPalindrome = function(f) {
    var radix = 0;
    var flipped_number = 0;
    while( ( f % Math.pow(10, radix) ) != f ) {
        radix += 1;
    }
    //console.log('radix: ' + radix);
    var j = radix - 1;
    radix = 0;
    while( ( f % Math.pow(10, radix) ) != f ) {
        var dig = Math.floor(f / Math.pow(10, radix)) % 10;
        //console.log('dig: ' + dig);
        flipped_number += dig * Math.pow(10, j);
        radix += 1;
        j -= 1;
    }
    //console.log('number: ' + f + ' flipped: ' + flipped_number);
    return flipped_number == f;
}

var findProduct = function(xdigits) {
    var max_value_xdigits = 0;
    for(var i = 0; i < xdigits; i++) {
        max_value_xdigits += 9 * Math.pow(10, i);
    }
    var min_value_xdigits = Math.pow(10, i-1);
    console.log('max_value_xdigits: ' + max_value_xdigits + ' min_value_xdigits: ' + min_value_xdigits);
    var max_value = max_value_xdigits * max_value_xdigits;
    console.log('max value: ' + max_value);
    var max_palindrome = 0;
    while( max_value_xdigits > min_value_xdigits) {
        for(var j = max_value_xdigits; j > min_value_xdigits; j--) {
            var my_value = max_value_xdigits * j;
            //console.log( max_value_xdigits + 'x' + j + ' = ' + my_value);
            if( isPalindrome( my_value ) ) {
                console.log( 'Found: ' + max_value_xdigits + 'x' + j + ' = ' + my_value);
                if(max_palindrome < my_value) {
                    max_palindrome = my_value;
                    console.log('max: ' + my_value);
                }
            }
        }
        //console.log('max_value_xdigits: ' + max_value_xdigits );
        max_value_xdigits -= 1;
    }
    console.log('max_palindrome: ' + max_palindrome);
    return max_palindrome;
}

findProduct(3);