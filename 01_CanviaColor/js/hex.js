const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let colorEnHexadecimal = "#";
    for (let i = 0; i < 6; i++){
        colorEnHexadecimal += hex[getNumeroAleatori()];
    }
});

function getNumeroAleatori() {
    return Math.floor(Math.random()* colors.length)
}