document.querySelector("#siguiente").onclick = function (e) {
    e.preventDefault();
    console.log("hola");
    const $cantidadIntegrantes = Number(
        document.querySelector("#integrantes-familia").value
    );
    crearIntegrantes($cantidadIntegrantes);
    mostrarBotonCalcular();
};

document.querySelector("#calcular").onclick = function () {
    const numeros = obtenerEdades();
    mostrar();
    mostrarResultados(numeros);
};

document.querySelector("#reset").onclick = function () {
    ocultarIntegrantes();
    ocultarResultados();
    ocultarBotonCalcular();
};
function crearIntegrantes(cantidadIntegrantes) {
    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i);
    }
}

function crearIntegrante(index) {
    const $integrantes = document.querySelector("#integrantes");

    const saltoLinea = document.createElement("br");

    const $label = document.createElement("label");
    $label.textContent = `Ingrese la edad del integrante ${index + 1} `;
    const $input = document.createElement("input");
    $input.type = "number";
    $integrantes.appendChild(saltoLinea);
    $integrantes.appendChild($label);
    $integrantes.appendChild($input);
}

function mostrarBotonCalcular() {
    const btnOculto = document.querySelector("#calcular");
    btnOculto.className = "";
    obtenerEdades();
}

function obtenerEdades() {
    const $integrantes = document.querySelectorAll("#integrantes input");
    const edadesIntegrantes = [];
    for (let i = 0; i < $integrantes.length; i++) {
        edadesIntegrantes.push(Number($integrantes[i].value));
    }
    return edadesIntegrantes;
}

function mostrarResultados(numeros) {
    const integranteMayor = document.querySelector("#integrante-mayor");
    const integranteMenor = document.querySelector("#integrante-menor");
    const promedioEdadFamiliar = document.querySelector("#promedio");

    integranteMayor.innerText = `El integrante mayor tiene una edad de ${Math.max(
        ...numeros
    )} años`;
    integranteMenor.innerText = `El integrante menor tiene una edad de ${Math.min(
        ...numeros
    )} años`;
    promedioEdadFamiliar.innerText = `El promedio de edad de la familia es de  ${calcularPromedioFamiliar(
        numeros
    )} años`;
}

function calcularPromedioFamiliar(numeros) {
    let acumulador = 0;
    for (let i = 0; i < numeros.length; i++) {
        acumulador += numeros[i];
    }
    return acumulador / numeros.length;
}

function mostrar() {
    const $resultados = document.querySelector("#resultados");
    $resultados.className = "";
}

function ocultarResultados() {
    const $resultados = document.querySelector("#resultados");
    $resultados.className = "hidden";
}

function ocultarIntegrantes() {
    const $integrantes = document.querySelector("#integrantes");
    $integrantes.className = "hidden";
}

function ocultarBotonCalcular() {
    const $calcular = document.querySelector("#calcular");
    $calcular.className = "hidden";
}