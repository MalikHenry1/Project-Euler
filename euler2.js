
var S = 0;
var F = [0,1];

for(var i=2; i < 4000000; i++){
    F[i] = F[i-1] + F[i-2];
}

for(i=0; F[i] < 4000000; i++){
    if(i%3==0){
    S += F[i];
    }
}
 console.log(S);

