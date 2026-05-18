const lesTxt = document.getElementsByTagName('p');
console.log(lesTxt);

const textesTab = Array.from(lesTxt);
console.log(textesTab);


textesTab.map((item) => item.innerText='Ceci est un test');
textesTab.map((item) => item.style.color='red');