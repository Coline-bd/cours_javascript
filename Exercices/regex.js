const identifiant=document.querySelector('#identifiant');
const password=document.querySelector('#password');
const errortext=document.querySelector('#errorSection');

const regexIdentifiant = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const regexChiffre = /\d/;
const regexSpecial =  /[$&@!]/;





identifiant.addEventListener('keyup',()=>{
    if (regexIdentifiant.test(identifiant.value)){
        identifiant.style.backgroundColor='chartreuse';
    }
    else{
        identifiant.style.backgroundColor='red';
    }
    }
)


password.addEventListener('keyup',()=>{
    let errorMessage='';
    if (password.value === '') {
        errortext.innerHTML = '';     // On efface les messages
        errortext.style.border = 'none'; // On retire la bordure rouge/verte
        return;                        
    };
    if(password.value.length<6){
        errorMessage+="<li>Votre Mot de passe est trop Court</li>";
    }
    else if(password.value.length>8){
        errorMessage+='<li>Votre Mot de passe est trop Long</li>'
    }
    if (!password.value.match(regexSpecial)){
        errorMessage+='<li>Le Mot de passe doit contenir 1 caractère spécial</li>'
    }
    if(!password.value.match(regexChiffre)){
    errorMessage+='<li>Le Mot de passe doit contenir 1 chiffre</li>'
    }
    if(errorMessage!=''){
        errortext.innerHTML=errorMessage;
        errortext.style.border = '5px solid red';
    }
    else{
        errortext.innerHTML='Le mot de passe est VALIDE bien joué';
        errortext.style.border = '5px solid green';
    }
}
)

