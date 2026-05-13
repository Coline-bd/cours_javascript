function trentetrois(a=0){
    console.log(33+a);
}

trentetrois(10)

function addition(a=0,b=0){
    console.log(a+b);
}

addition(10,20)


//TODO : Pourquoi ca beug ?
function buggyFunction() {
    let wtf = 9;
    console.log(wtf);
}; 

buggyFunction();
console.log(wtf);