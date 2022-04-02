var S = 0;

for (var i=0; i<1000; i++){
    if(i%3 == 0 || i%5 == 0){
        S += i;
    }
}

console.log(S);