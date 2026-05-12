let pizarria ='"La pizarria Raffinata"';
let date = "12/05/2026";
let prenom = "Giselle";
let age = 70;
let adresse = "10 boulevard de la mama";
let temps = 30;

let blague ="Qu'est ce qu'une pizza dit à une autre pizza qui lui demandait des conseils ? \"Suis ta pate et tout ira bien\" !"
// let bio = `${prenom}, ${age} ans, 
// habite à ${ville}`;

let pizza = "margarita";

let SumUpOrderPhrase ="Bonjour " + prenom + ", votre pizza : " + pizza + " est en cours de préparation. Elle vous sera livrée d'ici " + temps+ "minutes au " + adresse + " merci d'avoir commandé chez " + pizarria + ". \n --- \n" + blague

console.log(SumUpOrderPhrase)

// Correction
console.log("-------------------Exercices Strings-------------------");

let userName = 'Toto';
let pizzaName = 'Calzone';
let date = new Date().toLocaleDateString('fr-FR');
let adress = '11 avenue de l\'europe';

let pizzaPrice = 10.50;
let pizzaQuantity = 2;
let totalPrice = pizzaPrice * pizzaQuantity;
let pizzaIngredients = ["Tomate", "Mozzarella", "Olives", "Anchois"];
let deliveryTime = 30;

let sumUpPhrase = `Le ${date} : 

Bonjour Mr ${userName}, votre commande (${pizzaPrice}€) : 
${pizzaName} 
Avec ces ingrédients : (${pizzaIngredients[1]}, ${pizzaIngredients[2]}, ${pizzaIngredients[3]}) 

est en cours de préparation.
Elle vous sera livrée d'ici ${deliveryTime} minutes au ${adress}
Merci d'avoir commandé chez la pizerria "Rafinata".
---
Qu'est-cequ'une pizza a dit à une autre pizza qui lui demandait des conseils ?
"Suis ta pâte et tout ira bien."
`

console.log(sumUpPhrase);