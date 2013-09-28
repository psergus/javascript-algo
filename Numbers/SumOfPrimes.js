/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
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
        if( (lastD % 2) === 0 || lastD === 0 || lastD === 5 || (i % 3) === 0) {
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
            i += 2;
            break;
        }
    }
    return i;
}

var findPrimeLessThan = function(n) {
    var from = 5;
    while(from < n) {
        from = findNextPrime(from);
    }
    primes.pop();
    return primes[ primes.length - 1 ];
}

var n = 2000000;

console.log( n + 'th prime is: ' + findPrimeLessThan(n) );
var sum = 0;
for(var i = 0; i < primes.length; i++) {
    sum += primes[i];
}
console.log( 'sum: ' + sum );
//console.log(primes);


