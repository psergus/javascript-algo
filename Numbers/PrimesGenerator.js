/*
* The prime factors of 13195 are 5, 7, 13 and 29.
* What is the largest prime factor of the number 600851475143 ?
*/

Array.prototype.reduce = function(callback, initValue) {
    var value = initValue || this[0];
    for(var index = 0; index < this.length; index++) {
        //console.log('callback with: ' + value + ' and ' + this[index]);
        value = callback(value, this[index], index, this);
    }
    return value;
};

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
            /*
            for(var y = 0; y < primes.length; y++) {
                if((i % primes[y]) === 0) {
                    //console.log( i + ' can be divided by ' + primes[y]);
                    is_prime = false;
                    break;
                }
            }
            */
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

var n = 1100000;
var next = primes[primes.length - 1];
while(primes.length < n) {
    next = findNextPrime(next);
}

//console.log(primes);
//console.log(primes.reduce(function(prev_val, value, index){ return prev_val * value; }, 0));
