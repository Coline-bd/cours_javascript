const lesTxt = document.getElementsByTagName('p');
console.log(lesTxt);

const textesTab = Array.from(lesTxt);
console.log(textesTab);


textesTab.map((item) => {
    item.innerText='Ceci est un test'
    item.style.color='red';
});

const laDiv = document.querySelector('.vide');
console.log(laDiv);

laDiv.append(`Là c'est JS qui ajoute du texte dans la div`);
// Append plutot pensé pour ajouter du contenu à la volé au format string
// si on a crée ou séléctionné un élément que l'on veut placer : ceci peut marcher
// Mais on a aussi la fonction appendChild;
laDiv.appendChild(lesTxt[0]);

//créer un nouveau élément de texte 
const nouveauTexte = document.createTextNode('ajout avec createtextenode');
//le placer
laDiv.append(nouveauTexte);


//créer une balise
const newH1 = document.createElement('h1');
newH1.innerText = "ajout de la balise h1" //la remplir
laDiv.appendChild(newH1); //la placer

const newA = document.createElement('a');
newA.innerText='lien cliquable';
newA.href="#";
laDiv.appendChild(newA);

