

const $lucesDelCirculo = document.queryselectorAll('.luces-circulo');
let contadorDeLuz = 0;

let mostrarLuz = () => {
    $lucesDelCirculo[contadorDeLuz].className = 'luces-circulo';
    contadorDeLuz++;

    if(contadorDeLuz > 2) contadorDeLuz = 0;

    const luzActual = $lucesDelCirculo[contadorDeLuz];
    luzActual.classList.add(luzActual.getAttribute('color'))
}

setInterval(mostrarLuz,1000)