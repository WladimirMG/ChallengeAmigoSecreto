// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = []; 
const ingresaAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const amigoSecreto = document.getElementById("resultado");

listaAmigos;

function agregarAmigo() {
    amigos.push(ingresaAmigo.value);
    listaAmigos.innerHTML = listaAmigos.innerHTML +  `<li> ${ingresaAmigo.value} </li>`;
    ingresaAmigo.value = "";
}

function sortearAmigo() {
    const amigoRandom = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[amigoRandom];
    amigoSecreto.innerHTML = `<li> El amigo secreto es: ${amigoSeleccionado}</li>`;
    listaAmigos.innerHTML = '';
    amigos.length = 0;
}


