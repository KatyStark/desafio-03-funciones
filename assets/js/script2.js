function cambiarColor(colorId, color = 'black') {
    colorId.style.backgroundColor = color;
}

const colorAzul = document.querySelector('#azul');
colorAzul.addEventListener("click", function () {
    cambiarColor(colorAzul);
})

const colorRojo = document.querySelector('#rojo');
colorRojo.addEventListener("click", function () {
    cambiarColor(colorRojo);
})

const colorVerde = document.querySelector('#verde');
colorVerde.addEventListener("click", function () {
    cambiarColor(colorVerde);
})

const colorAmarillo = document.querySelector('#amarillo');
colorAmarillo.addEventListener("click", function () {
    cambiarColor(colorAmarillo);
});

//Evento de teclado

function limpiarCaja() {
    box.style.backgroundColor = "white";
}

const cajaBlanca = document.querySelector('#key');

document.addEventListener("keydown", function (event) {
    if (event.key === "a" || event.key === "A") {
        cambiarColor(cajaBlanca, 'pink');
    } else if (event.key === "s" || event.key === "S") {
        cambiarColor(cajaBlanca, 'orange');
    } else if (event.key === "d" || event.key === "D") {
        cambiarColor(cajaBlanca, 'cornflowerblue');
    }
});

//Agregado de cajas

const contenedor = document.querySelector('#cajaCrear');
contenedor.style.display = "grid";
contenedor.style.gridTemplateColumns = "repeat(4, 200px)";

function crearCaja(color) {
    const caja = document.createElement("div");
    caja.style.width = "200px";
    caja.style.height = "200px";
    caja.style.backgroundColor = color;
    caja.style.border = "2px solid black";
    contenedor.appendChild(caja);
}

document.addEventListener("keydown", function(event) {

    if (event.key === "q" || event.key === "Q") {
      crearCaja("purple");
    } else if (event.key === "w" || event.key === "W") {
      crearCaja("gray");
    } else if (event.key === "e" || event.key === "E") {
      crearCaja("brown");
    }
  });
