// var maxPrime = 3;
// var Factors = [0];
// var N = 600;



// for(var i = 1; i<=N; i++){
//     if(N%i==0){
//         Factors[i] = i;
//     }
// }

// for(var i=1; i<10; i++){
//     for(var j=1; j<i; j++){
//         if(i%j==0){
//             maxPrime = j;
//         }
//     }
// }

 // TO-DO: write code for a function that pushes the prime factors into an array, finds the max of that array, and prints the max
function primeFactors(n)
{
    // Print the number of 2s that divide n
    while (n % 2 == 0)
    {
        console.log(2 + " ");
        n = Math.floor(n/2);
    }
 
    // n must be odd at this point. So we can skip
    // one element (Note i = i +2)
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