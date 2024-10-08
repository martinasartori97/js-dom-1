console.log("hello");

function clickAccendi() {
    const button = document.getElementById("button");
    button.addEventListener("click", accendiLampadina);

}
clickAccendi();
console.log(button);





function accendiLampadina() {
    const lampadina = document.getElementById("lampadina");
    lampadina.src = "yellow_lamp.png"

   // if (lampadina.src.includes("img\white_lamp.png")) {
       // lampadina.src = "img\yellow_lamp.png";
        //button.textcontent = "spegni";
   // } else {
        //lampadina.src = "img\white_lamp.png"
       // button.textcontent = "accendi";
    //}

}
console.log(lampadina);







