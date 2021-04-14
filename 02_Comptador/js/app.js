// Creem comtpador i l'inicialitzem a 0

let comptador = 0;

const valor = document.querySelector("#value");
const botons = document.querySelector(".btn");

botons.forEach(function(btn) {
    
    btn.addEvenListener("click", function(e){
    const styles = e.currentTarget.classList;  
    
    if (styles.contains("decrementar")) {
        comptador--;
    } else if (styles.contains("incrementar")){
        comptador++;
    }else{
        comptador = 0;

    }

    if (comptador > 0) {
        valor.style.color = "green";

    }
    if (comptador < 0) {
        valor.style.color = "red";
    }
    if (comptador == 0) {
    valor.style.color = "#222";
    }

    valor.textContent = comptador;
});
});