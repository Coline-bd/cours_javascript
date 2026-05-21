const h1=document.querySelector('h1');


let isClicked=false;

h1.addEventListener('click',() =>{
    if (isClicked){
        h1.innerText='Bravo 🐱'
        h1.style.color='white';
        h1.style.backgroundColor='purple';
    }
    else{
        h1.innerText='Clique ici'
        h1.style.color='black';
        h1.style.backgroundColor='white';
    }

    isClicked=!isClicked;
})


const h2=document.querySelector('h2');
const addBtn=document.querySelector('#ajouterbtn');
console.log(addBtn);
addBtn.addEventListener('click',()=>{
    h2.classList.add("couleurs");
})

const suppBtn=document.querySelector('#suppbtn');
console.log(suppBtn);
suppBtn.addEventListener('click',()=>{
    h2.classList.remove("couleurs");
})

const togglebtn=document.querySelector('#togglebtn');
console.log(togglebtn);
togglebtn.addEventListener('click',()=>{
    h2.classList.toggle('couleurs');
})

//? Exemple ou l'on veut CAPTER un event
// document.addEventListener('click', (clickEvent) => {
//     console.log('coord X',clickEvent.pageX);
//     console.log('coord Y',clickEvent.pageY);
//     const image=document.createElement('img');
//     image.src='../etna.jpg';
//     image.style.position='absolute';
//     image.width='150';
//     image.style.top=(clickEvent.pageY-75)+"px";
//     // image.style.top=clickEvent.pageY+"px";
//     // image.style.left=clickEvent.pageX +"px";
//     image.style.left=(clickEvent.pageX-75)+"px";
//     console.log((image.width));
//     console.log(image);
//     document.body.append(image);

// });

const input=document.querySelector('input');
input.addEventListener('focus',()=>{
    input.style.backgroundColor='purple';
    input.style.color='white';
})

input.addEventListener('blur',()=>{
    input.style.backgroundColor='';
    input.style.color='black';
})


const h3=document.querySelector('h3');
console.log(h3);
document.addEventListener('mouseleave',()=>{
    h3.style.display='block';
})