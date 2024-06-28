/*Declaracion de variables*/
let numeroMaximo = 10;
let listaNumerosSorteados =[];
let numeroSecreto = 0;
let intentos = 1;

//funcion para cambiar el texto de un elemento HTML
function asignarTextoElemnto(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemnto('p',`¡Acertaste el numero  en ${intentos} ${(intentos == 1) ? 'intento!':'intentos!'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto!
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemnto('p','El numero secreto es menor');
        }else{
            asignarTextoElemnto('p','El numero secreto es mayor');
        }
        intentos ++;
    }limpiarContenedor();
    return;
}
function limpiarContenedor() {
  document.querySelector('#numeroUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemnto('p','Ya se generaron todos los numeros posibles');
    }else{ 
    
    //si el numero generado esta incluido en la lista 
     if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
     }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
    }
}
function condicionesIniciales() {
    asignarTextoElemnto('h1','Juego del numero secreto!');
    asignarTextoElemnto('p',`Elige un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function ReiniciarJuego(){
    //Limpiar la caja 
    limpiarContenedor();
    //Indicar mensaje de intervalos de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled','true'); 
}

condicionesIniciales();


