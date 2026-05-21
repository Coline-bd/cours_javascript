// const divApi = document.querySelector('.divApi');

// const contactApiSecurePlus =  async () => {
//     try{
//         const data= await fetch('https://pokeapi.co/api/v2/pokemon');
//         console.log(data);

//         if (!data.ok || data.status!==200){
//             console.error('erreur lors de la récupération des données : ', data.statusText );
//             return;
//         }

//         const dataTransformed= await data.json();
//         console.log(dataTransformed);
        
//         const pokemons = dataTransformed.results;
//         console.log(pokemons);
        
//         // for (let i=0;i<pokemons.length;i++){
//         //     const divNom=document.createElement('div');
//         //     divNom.innerText=pokemons[i].name;
//         //     divApi.appendChild(divNom);
//         // }

//         pokemons.forEach(element => {
//             const divNom=document.createElement('div');
//             divNom.innerText=element.name;
//             divApi.appendChild(divNom);
//         });

//         // pokemons.map(element => {
//         //     const divNom=document.createElement('div');
//         //     divNom.innerText=element.name;
//         //     divApi.appendChild(divNom);
//         // });

//         // console.log(pokemons[0].name);
//     }
//     catch (error){
//         console.error("Erreur lors de l'appel à l'API : ", error);
//     }
// }

// contactApiSecurePlus();


//appeler une API quand on appuie sur un bouton

const contactApi =  async () => {
    try{
        const dataChuck= await fetch('https://api.chucknorris.io/jokes/random');
        console.log(dataChuck);

        if (!dataChuck.ok || dataChuck.status!==200){
            console.error('erreur lors de la récupération des données : ', data.statusText );
            return;
        }

        const dataChuckTransformed= await dataChuck.json();
        console.log(dataChuckTransformed);
        console.log(dataChuckTransformed.value);
        
        const blague=document.querySelector('.blague');
        blague.innerHTML=dataChuckTransformed.value

    }
    catch (error){
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
}



const blagueBtn = document.querySelector('#blagueBtn');
blagueBtn.addEventListener('click',contactApi);
    