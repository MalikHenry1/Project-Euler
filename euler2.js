
var S = 0;
var F = [0,1];

for(var i=2; i < 4000000; i++){ //generating the first 4million Fibonacci numbers
    F[i] = F[i-1] + F[i-2];
}

for(i=0; F[i] < 4000000; i++){ 
    if(i%3==0){ // Since k(2) = 3, every third Fibonacci number is even.
    S += F[i];
    }
}
 console.log(S);

