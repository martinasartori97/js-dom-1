console.log("hello");

function accendiLampadina(){
const lampadina = document.getElementById("lampadina");
lampadina.src = img/yellow_lamp.png
}

const button = document.getElementById("accendiButton");
button.addEventListener("click", accendiLampadina);
