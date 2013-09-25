/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/
var primes = [2, 3, 5];
var findNextPrime = function(from) {
    var lastDigit = function(number) {
        return number % 10;
    };

    for(var i = from;; i++) {
        var is_prime = true;
        //console.log( 'check ' + i );
        
        //first test
        var lastD = lastDigit(i);
        if( (lastD % 2) === 0 || lastD === 0 || lastD === 5) {
            is_prime = false;
        }
        
        //second test
        if(is_prime) {
            for(var y = 0; y < primes.length; y++) {
                if((i % primes[y]) === 0) {
                    //console.log( i + ' can be divided by ' + primes[y]);
                    is_prime = false;
                    break;
                }
            }
        }
        if(is_prime) {
            primes.push(i);
            break;
        }
    }
    return i;
}

var findTheNthPrime = function(n) {
    var from = 5;
    while(primes.length < n) {
        from = findNextPrime(from);
    }
    return primes[n-1];
}
var n = 100;
console.log( n + 'th prime is: ' + findTheNthPrime(10001) );
//console.log(primes);
