// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//función para agregar amigos
function agregarAmigo(nombre) {
    //Capturar el valor del input
    let nombre_amigo = document.getElementById("amigo").value;
    
    //Validar entrada vacía
    if (nombre_amigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }else{
        amigos.push(nombre_amigo);
        actualizarListaAmigos();
    }

    //Limpiar el input
    document.getElementById("amigo").value = "";
}   

//función para actualizar la lista de amigos
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla

    for(let i = 0; i < amigos.length; i++) {
        let ul = document.createElement("ul");
        ul.textContent = amigos[i];
        lista.appendChild(ul);
    }
}

//función para sortear amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }else if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }else{
        let aleatorioIndex = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[aleatorioIndex];
        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "El amigo seleccionado es: " + amigoSeleccionado;
    }
}