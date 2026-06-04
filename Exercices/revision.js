//Menu burger
const menuBtn=document.querySelector('#menuBurger');
const navList=document.querySelector('#menuList');
const navBar=document.querySelector('#navBar');

menuBtn.addEventListener('click',()=>{
    navList.classList.toggle('open');
})

document.addEventListener('click',(event)=>{
    if (!navBar.contains(event.target)){
        navList.classList.remove('open');
    }
})

//Changer style avec ClassLit
const classChange=document.querySelector('#classList');
const addClass=document.querySelector('#addClass');
const supClass=document.querySelector('#suppClass');
const toggleClass=document.querySelector('#toggleClass');

addClass.addEventListener('click',()=>{
    classChange.classList.add('changeClass')
})

supClass.addEventListener('click',()=>{
    classChange.classList.remove('changeClass')
})

toggleClass.addEventListener('click',()=>{
    classChange.classList.toggle('changeClass')
})

//Changer contenu au click
const clickChange=document.querySelector('#clickChange');
let isclicked=false;
clickChange.addEventListener('click',()=>{
    isclicked=!isclicked;
    clickChange.textContent=(isclicked)?'Yahouuuuuuuuuuu':'Transformez moi !';
})


//Capter l'event et afficher une image au click
const capterDiv=document.querySelector('#capterDiv');
capterDiv.addEventListener('click',(event)=>{
    const image=document.createElement('img');
    image.src='https://static.nationalgeographic.fr/files/styles/image_3200/public/75552.ngsversion.1422285553360.webp?w=1600&h=900';
    image.style.position='absolute';
    image.style.top=event.y+'px';
    image.style.left=event.x+'px';
    capterDiv.appendChild(image);
})


//ajouter le contenu de l'input dans une balise en dessous + localstorage
const inputFocus=document.querySelector('#inputFocus');
const inputText=document.querySelector('#inputText');

inputFocus.value=localStorage.getItem('texte');

inputText.textContent=inputFocus.value?inputFocus.value:'';

inputFocus.addEventListener('keyup',(event)=>{
    inputText.textContent=inputFocus.value;
    localStorage.setItem("texte",inputFocus.value);
}
)

//changer au focus
inputFocus.addEventListener('focus',()=>{
    inputFocus.style.backgroundColor='purple';
    inputFocus.style.color='white';
})

inputFocus.addEventListener('blur',()=>{
    inputFocus.style.backgroundColor='';
    inputFocus.style.color='black';
})

const submitbtn=document.querySelector('#submitBtn');
inputFocus.addEventListener('keyup',()=>{
    // if (inputFocus.value.length>5){
    //     submitbtn.setAttribute('disabled',true);
    // }
    // else{
    //     submitbtn.removeAttribute('disabled');
    // }
    submitbtn.disabled = inputFocus.value.length>=5 ? true : false;
})

//scroll
const scrollMax=document.body.scrollHeight-innerHeight;
const barScroll=document.querySelector('#barScroll');
document.addEventListener('scroll',(event)=>{
    const onEstOu=(scrollY / scrollMax) * 100;
    barScroll.style.width=onEstOu+'%';
})

//array.from() transformer nodelist en array

//minuteur

// setTimeout(timeout,3000);

function timeout(){
    document.body.style.backgroundColor='red';
}

const timer=document.querySelector('#timer');
const timerBtn=document.querySelector('#timerBtn');

timerBtn.addEventListener('click',()=>{
    timer.textContent="Timer";
    let counter=3;
    const intervallID=setInterval(()=>{
        if (counter>0){
        timer.textContent=counter;
        counter--;}
        else{
            timer.textContent='Go'
            clearInterval(intervallID);
        }
    },1000)
    
})


//Regex formulaire
const mdp=document.querySelector('#mdp');
const pseudo=document.querySelector('#user');
const mail=document.querySelector('#mail');
const errormsg=document.querySelector('#errormsg');

const emailRegexp = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

mail.addEventListener('keyup',()=>{
    if (emailRegexp.test(mail.value)){
        mail.style.backgroundColor='green';
    }
    else{
        mail.style.backgroundColor='red';
    }
})

mdp.addEventListener('keyup',()=>{
    let message="";
    if (mdp.value === '') {
        errormsg.innerHTML = '';     // On efface les messages
        errormsg.style.border = 'none'; // On retire la bordure rouge/verte
        return;                        
    };
    if (mdp.value.length<6){
        message+='<li>mot de passe trop court</li>';
    }
    if (mdp.value.length>10){
        message+='<li>mot de passe trop long</li>';
    }
    if (!charSpecial.test(mdp.value)){
        message+='<li>Le Mot de passe doit contenir 1 caractère spécial</li>'
    }
    if(!charDecimal.test(mdp.value)){
    message+='<li>Le Mot de passe doit contenir 1 chiffre</li>'
    }
    console.log(message);
    if(message!=''){
        errormsg.innerHTML=message;
        errormsg.style.border = '5px solid red';
    }
    else {
        errormsg.innerHTML='Le mot de passe est VALIDE bien joué';
        errormsg.style.border = '5px solid green';
    }
})

