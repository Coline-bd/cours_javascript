//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};

const laDiv = document.querySelector('div');

const newImg = document.createElement('img');
newImg.src=userData.img;
newImg.style.height='400px';
console.log(userData.img);
laDiv.appendChild(newImg);

const nom=document.createElement('h1');
nom.innerText=userData.name;
laDiv.appendChild(nom);

const mail=document.createElement('p');
mail.innerText=userData.email;
laDiv.appendChild(mail);

const age=document.createElement('p');
age.innerText=userData.age;
laDiv.appendChild(age);

const date=document.createElement('p');
date.innerText=userData.dob;
laDiv.appendChild(date);

const actif=document.createElement('p');
actif.innerText=userData.active;
laDiv.appendChild(actif);

laDiv.style.color='white';
laDiv.style.width='400px';
laDiv.style.background='linear-gradient(45deg,purple,orange)';
laDiv.style.padding='2rem';