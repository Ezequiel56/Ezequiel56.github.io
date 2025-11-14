// Obtén una referencia al elemento que contiene las letras
const miTexto = document.getElementById('miTexto');

// Agrega un evento de clic al elemento
miTexto.addEventListener('click', (event) => {
    // Comprueba si se hizo clic en un elemento span
    if (event.target.tagName === 'SPAN') {
        // Alterna la clase "marcado" para resaltar o quitar el resaltado de la letra
        event.target.classList.toggle('marcado');
    }
});

// Obtén una referencia al elemento que contiene las letras
const miTexto2 = document.getElementById('miTexto2');

// Agrega un evento de clic al elemento
miTexto2.addEventListener('click', (event) => {
    // Comprueba si se hizo clic en un elemento span
    if (event.target.tagName === 'SPAN') {
        // Alterna la clase "marcado" para resaltar o quitar el resaltado de la letra
        event.target.classList.toggle('marcado');
    }
});

// Obtén una referencia al elemento que contiene las letras
const miTexto3 = document.getElementById('miTexto3');

// Agrega un evento de clic al elemento
miTexto3.addEventListener('click', (event) => {
    // Comprueba si se hizo clic en un elemento span
    if (event.target.tagName === 'SPAN') {
        // Alterna la clase "marcado" para resaltar o quitar el resaltado de la letra
        event.target.classList.toggle('marcado');
    }
});

// Obtén una referencia al elemento que contiene las letras
const miTexto4 = document.getElementById('miTexto4');

// Agrega un evento de clic al elemento
miTexto4.addEventListener('click', (event) => {
    // Comprueba si se hizo clic en un elemento span
    if (event.target.tagName === 'SPAN') {
        // Alterna la clase "marcado" para resaltar o quitar el resaltado de la letra
        event.target.classList.toggle('marcado');
    }
});

//Para ocultar y hacer visibles los divs
var divs = ["div1", "div2", "div3", "div4"];
var currentIndex = 0;

function cambiarDiv() {
    var currentDiv = document.getElementById(divs[currentIndex]);
    var nextIndex = (currentIndex + 1) % divs.length;
    var nextDiv = document.getElementById(divs[nextIndex]);

    currentDiv.classList.remove("visible");
    currentDiv.classList.add("oculto");

    nextDiv.classList.remove("oculto");
    nextDiv.classList.add("visible");

    currentIndex = nextIndex;
}


//Fondo de pantalla
const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 3000

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

