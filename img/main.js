console.log("hello");

function clickAccendi() {
    const button = document.getElementById("button");
    button.addEventListener("click", accendiLampadina);

}
clickAccendi();
console.log(button);


function accendiLampadina() {
    const lampadina = document.getElementById("lampadina");
    lampadina.src = "img\yellow_lamp.png"
}
console.log(lampadina);






