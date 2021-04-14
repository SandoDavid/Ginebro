const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const numAleatori = getNumeroAleatori();
    document.body.style.backgroundColor = colors[numAleatori];
    color.textContent = color[numAleatori];
});

function getNumeroAleatori() {
    return Math.floor(Math.random()* colors.length)
};