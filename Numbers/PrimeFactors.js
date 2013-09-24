var numberLookUp = 600851475143;//13195;

var primes = [2];
var findNextPrime = function(from) {
    var lastDigit = function(number) {
        return number % 10;
    };

    for(var i = from;; i++) {
        var is_prime = true;
        console.log( 'check ' + i );
        
        //first test
        var lastD = lastDigit(i);
        if( (lastD % 2) === 0 || lastD === 0 || lastD === 5) {
            is_prime = false;
        }
        
        //second test
        if(is_prime) {
            for(var y = 0; y < primes.length; y++) {
                if((i % primes[y]) === 0) {
                    console.log( i + ' can be divided by ' + primes[y]);
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

var findBiggestPrime = function(num) {
    var i = 2;
    var numberPrimes = [];
    console.log('Find primes for ' + num);
    while(i < num) {
        if((num % i) === 0) {
            console.log('found prime: ' + i);
            numberPrimes.push(i);
            num = num / i;
            console.log('our num is ' + num + ' now');
            i += 1;
        }
        else {
            i = findNextPrime(i);
        }
    }
    numberPrimes.push(num);
    return numberPrimes;
}

console.log( findBiggestPrime(numberLookUp) );
