const textarea = document.querySelector('#note-textarea');
const render= document.querySelector('.textRender');

const texte=localStorage.getItem('monSuperTexte');
textarea.value=texte;

if (textarea.value){
    render.innerText=textarea.value;
};

textarea.addEventListener('keyup',()=>{
    localStorage.setItem('monSuperTexte',textarea.value);
    render.innerText=textarea.value;
})