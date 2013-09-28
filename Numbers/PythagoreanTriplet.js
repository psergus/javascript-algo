/*
A Pythagorean triplet is a set of three natural numbers, a  b  c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

/*
    Solution. 
    According to Euclid theorem, there are a, b, and c such that
    a = m^2 - n^2,
    b = 2nm;
    c = m^2 + n^2,
    where m > n and m and n are co-primes.
    Follwing this notation, we can easily substitute a + b + c = 1000 with
    m^2 - n^2 + 2mn + m^2 -n^2 = 1000. Reducing this equivalence, we find that 
    n = (500 - m^2) / m.
    Now we need to find m and n such that m > n and m and n are co-primes.
    Moreover, we know that a or b or c cannot be more than 800 because even if
    two othe other numbers are 100, then 1000 - 100 - 100 = 800; Therefore, if
    m > n, then m should be not higher than 28, because 800(a) = m^2 + n^1 with
    n = 1.
*/

var isInteger = function(n) {
    return typeof n === 'number' && parseFloat(n) == parseInt(n, 10) && !isNaN(n);
}



for(var m = 6; m < 29; m++) {
    var n = (500 - m*m) / m;
    var a = m*m - n*n;
    var b = 2*m*n;
    var c = m*m + n*n;
    
    if( isInteger(n)  && m > n) {
        console.log( 'a: ' + a + ' b: ' + b + ' c: ' +c );
        console.log( 'm: ' + m + ' n: ' + n);
        console.log('Answer: ' + a*b*c);
        break;
    }
}
