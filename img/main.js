console.log("hello");

function clickAccendi() {
    const button = document.getElementById("button");
    button.addEventListener("click", accendiLampadina);

}


function aggiungiImmagine() {
    const nuovaImmagine = document.createElement("img")
    nuovaImmagine.src = img\yellow_lamp.png
}

function accendiLampadina() {
    const lampadina = document.getElementById("lampadina");
    lampadina.src = img\yellow_lamp.png



