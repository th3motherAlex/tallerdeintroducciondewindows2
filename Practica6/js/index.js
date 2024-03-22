function insertar(valor) {
    document.getElementById('resultado').value += valor;
}

function limpiar() {
    document.getElementById('resultado').value = '';
}

function borrarUltimo() {
    var valor = document.getElementById('resultado').value;
    document.getElementById('resultado').value = valor.slice(0, -1);
}

function calcular() {
    var resultado = document.getElementById('resultado').value;
    var respuesta = eval(resultado);
    document.getElementById('resultado').value = respuesta;
}


const input = document.getElementById('resultado');


function limpiar() {
    input.value = '';
}


function borrarUltimo() {
    input.value = input.value.slice(0, -1);
}


function insertar(caracter) {
    input.value += caracter;
}


function calcular() {
    try {
        const resultado = eval(input.value);
        input.value = resultado;
    } catch (error) {
        input.value = 'Error';
    }
}


function calcularSeno() {
    const valor = parseFloat(input.value);
    const resultado = Math.sin(valor * Math.PI / 180); // Convertir a radianes antes de calcular el seno
    input.value = resultado;
}


function calcularCoseno() {
    const valor = parseFloat(input.value);
    const resultado = Math.cos(valor * Math.PI / 180); // Convertir a radianes antes de calcular el coseno
    input.value = resultado;
}
