// 💘 FECHA
const inicio = new Date("2026-01-01T00:00:00");

// ⏳ CONTADOR
function actualizarContador() {
    const ahora = new Date();
    const diff = ahora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("contador").innerHTML =
        `Te amo desde hace:<br>
        ${dias} días ${horas}h ${minutos}m ${segundos}s 💞`;
}
setInterval(actualizarContador, 1000);



function escribir(id, texto, velocidad = 40) {
    let i = 0;
    function escribirLetra() {
        if (i < texto.length) {
            document.getElementById(id).innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribirLetra, velocidad);
        }
    }
    escribirLetra();
}



function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "💖";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.querySelector(".corazones").appendChild(corazon);

    setTimeout(() => corazon.remove(), 5000);
}
setInterval(crearCorazon, 300);



function activarMusica() {
    const audio = document.getElementById("musica");
    audio.volume = 0.5;
    audio.play();
}



function sorpresa() {
    document.body.style.background = "#ff1e4d";
    setTimeout(() => {
        alert("Eres mi lugar favorito en todo el universo 💖");
        document.body.style.background = "";
    }, 300);
}



window.onload = () => {
    setTimeout(() => {
        document.querySelector(".card").classList.add("mostrar");

        escribir("titulo", "Para la mujer de mi vida 💖");
        escribir("texto1", "Si pudiera elegir un lugar seguro, sería a tu lado.");
        escribir("texto2", "Cuanto más tiempo estoy contigo, más te amo.");
    }, 2500);
};



document.addEventListener("click", e => {
    const corazon = document.createElement("div");
    corazon.innerHTML = "💘";
    corazon.style.position = "absolute";
    corazon.style.left = e.clientX + "px";
    corazon.style.top = e.clientY + "px";
    corazon.style.fontSize = "25px";

    document.body.appendChild(corazon);

    setTimeout(() => corazon.remove(), 1000);
});
