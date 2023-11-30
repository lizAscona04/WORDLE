// Variables fijas
let lista = ["APPLE", "ANGEL", "INDIA", "SOFIA"];
let intento = 6;

//console.log(random, Math.floor(Ma.random() * lista.length))
let indice = Math.floor(Math.random() * lista.length);

let palabra = lista[indice];
// Eventos
const BUTTON = document.getElementById("guess-button");

BUTTON.addEventListener("click", intentar);
console.log(palabra);


// Funciones
function intentar(){
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';

    const INTENTO =leerIntento();
    console.log(INTENTO)
    if (INTENTO === palabra){
        console.log("GANASTE");
        terminar("<h1>GANASTE!😎</h1>")
        return
    }
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (palabra[i] === INTENTO[i]){
            console.log (INTENTO[i], "verde");
            SPAN.style.backgroundColor = 'green';
            SPAN.innerHTML = INTENTO[i];
           
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "amarillo") //AMARILLO
            SPAN.style.backgroundColor = 'yellow';
            SPAN.innerHTML = INTENTO[i];
        } else {      
            console.log(INTENTO[i], "gris")
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'gray';
            SPAN.innerHTML = INTENTO[i];

        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW);

    intento = INTENTO - 1;
    if (intento <= 0 ){
        console.log("Perdiste");
        terminar("<h1>PERDISTE!😥</h1>")
    }
}

function leerIntento(){
   const VALOR = document.getElementById("guess-input").value.toUpperCase();
   console.log (VALOR)
    return VALOR;
    
}
function terminar(mensaje){
    const BOTON = document.getElementById("guess-button");
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}