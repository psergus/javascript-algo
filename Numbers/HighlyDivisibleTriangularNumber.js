var getTriangleNumber = function(n) {
    return (n*(n+1))/2;
}

var getNumberOfDivisors = function(n, divisors) {
    d = 1;
    if(!isPrime(n)) {
        for(var i = 0; primes[i] < n; i++) {
            if( (n % primes[i]) === 0 && divisors.indexOf(n/primes[i]) === -1 ) {
                //console.log(n + ' is divided by ' + primes[i] + ' becomes: ' + (n / primes[i]) );
                divisors.push( n / primes[i] );
                d += getNumberOfDivisors( n / primes[i], divisors);
            }
        }
    }
    return d;
}
var isPrime = function(n) {
    var is_prime = true;
        
    if( (n % 3) === 0 || (n%2) === 0 || (n%5) === 0 ) {
            is_prime = false;
    }
        
    //second test
    if(is_prime) {
        var r = Math.floor(Math.sqrt(n));
        var f = 5;
        while(f <= r) {
            if( (n % f) === 0 || (n % (f + 2)) === 0) {
                is_prime = false;
                break;
            }
            f += 6;
        }
    }
    return is_prime;
}

Math.log = (function() {
    var log = Math.log;
    return function(n, base) {
        return log(n)/( base? log(base) : 1);
    };
})();

var primes = [2, 3, 5];
var findNextPrime = function(from) {
    for(var i = from;; i++) {
        if(isPrime(i)) {
            primes.push(i);
            i += 1;
            break;
        }
    }
    return i;
}

var n = 500;
//generate 500 primes
var i = primes[primes.length - 1];
while(i < n) {
    i = findNextPrime(i);
}

var i = 1;
var d = [];
var max_d = 1;
while(max_d < 500) {
    var n = getTriangleNumber(i);
    var divisors = [];
    d = getNumberOfDivisors(n, divisors);
    if(max_d < d) {
        max_d = d;
        //console.log( i + ': ' + n + ' d: ' + d.length );
    }
    console.log( i + ': ' + n + ' d: ' + d );

    /*
    if(i > 10000) {
        break;
    }
    */
    i++;
}