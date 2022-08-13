
 // TO-DO: write code for a function that pushes the prime factors into an array, finds the max of that array, and prints the max
function primeFactors(n)
{
    // Print the number of 2s that divide n
    while (n % 2 == 0)
    {
        console.log(2 + " ");
        n = Math.floor(n/2);
    }
 
    // n must be odd at this point. So we can skip to the next odd number, hence i = i + 2
    // one element (Note i = i +2)
    // why the square root of n? Consider the factors of 36 (1,36), (2,18), (3,12), (4,9), (6,6)
    // you can think of the square root as the reflection point of the list of factors after which the previous factors repeat.
    // Thus, it suffices to set the upper bound of the for loop as the square root of n, and we know the list is exhasutive.
    for (let i = 3; i <= Math.sqrt(n); i = i + 2)
    {
        // While i divides n, print i and divide n
        while (n % i == 0)
        {
            console.log(i + " ");
            n = Math.floor(n/i);
        }
    }
 
    // This condition is to handle the case when n
    // is a prime number greater than 2
    if (n > 2)
        console.log(n + " ");
}

primeFactors(600851475143);











// for(var i=0; i<P.length; i++){
//     for(var j=0; j<=P[i]; j++){
//         if(P[i]%j !== 0){
//             maxPrime = P[i];           
//         }
//     }
// }

// Factors=Factors.filter(n => n);

// // console.log(P[P.length-1]);
// console.log(Factors);
// console.log(maxPrime);
// // 600851475143;