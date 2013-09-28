Math.log = (function() {
    var log = Math.log;
    return function(n, base) {
        return log(n)/( base? log(base) : 1);
    };
})();

var primes = [2, 3, 5];
var findNextPrime = function(from) {
    var lastDigit = function(number) {
        return number % 10;
    };

    for(var i = from;; i++) {
        var is_prime = true;
        //console.log( 'check ' + i );
        
        if( (i % 3) === 0 || (i%2) === 0 || (i%5) === 0 ) {
            is_prime = false;
        }
        
        //second test
        if(is_prime) {
            var r = Math.floor(Math.sqrt(i));
            var f = 5;
            while(f <= r) {
                if( (i % f) === 0 || (i % (f + 2)) === 0) {
                    is_prime = false;
                    break;
                }
                f += 6;
            }
        }
        if(is_prime) {
            primes.push(i);
            i += 1;
            break;
        }
    }
    return i;
}

function findTheLowestMultiple(n) {
    var i = primes[primes.length - 1];
    while(i < n) {
        i = findNextPrime(i);
    }
    //console.log(primes);
    var result = 1;
    for(i = 0; i < primes.length; i++) {
        var multiplier = Math.pow(primes[i], Math.floor(Math.log(n)/Math.log( primes[i])));
        result *= multiplier;
    }
    return result;
}

var n = 20;
var res = findTheLowestMultiple(n);
console.log(res);
