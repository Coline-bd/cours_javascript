const notes=[0,3,4,6,18,19,4]

function calculerMoyenne(tableau=[]){
    let somme=0;
    let n=tableau.length;
    for (let i=0;i<n;i++){
        somme+=tableau[i];
    }
    return somme/n;
}

// let moyenne=calculerMoyenne(notes);
// console.log(moyenne);


/*Avec des conditions*/
function calculerMoyenneMention(tableau=[]){
    let somme=0;
    let n=tableau.length;
    for (let i=0;i<n;i++){
        somme+=tableau[i];
    }
    let moyenne=somme/n;
    if (moyenne>=15){
        return "Très bien"
    }
    else if (moyenne>=10){
        return "Assez bien"
    }
    else{
        return "Refusé"
    }
}

resultat=calculerMoyenneMention(notes)
console.log(resultat)