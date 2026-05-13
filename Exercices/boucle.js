const notes=[0,3,4,6,18,19,4]

function calculerMoyenne(tableau=[]){
    let somme=0;
    let n=tableau.length;
    for (let i=0;i<n;i++){
        somme+=tableau[i]
    }
    return somme/n
}

let moyenne=calculerMoyenne(notes)
console.log(moyenne)