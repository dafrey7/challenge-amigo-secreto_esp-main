let listaAmigoSecreto = [];

function limpiarCaja() {
    document.querySelector('#amigo').value = ''; // Limpiamos la caja de texto
}

function agregarAmigo() {
    let amigoParticipante = document.getElementById('amigo').value;
    if (amigoParticipante.trim() !== "") { // Evita añadir nombres de amigos en blanco.
        listaAmigoSecreto.push(amigoParticipante);
        actualizarListaAmigos(); // Actualiza y muestra la nueva lista de amigos, después de agregar.
        limpiarCaja(); // Limpia el campo de entrada de amigo, después de agregar.
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

function actualizarListaAmigos() {
     // Limpiamos la lista antes de mostrarla para evitar resultados duplicados.
        listaAmigos.innerHTML = '';
        for (let i = 0; i < listaAmigoSecreto.length; i++) {
            var etiquetalistaAmigos = document.createElement('li');
            etiquetalistaAmigos.textContent = listaAmigoSecreto[i];
            listaAmigos.appendChild(etiquetalistaAmigos);
        }
 }

function sortearAmigo() {
  if (listaAmigoSecreto.length === 0) {
    alert("Tu lista de amigos está vacía.");
    return; // Sale de la función si la lista de amigos está vacía.
  }
  const indiceAleatorio = Math.floor(Math.random() * listaAmigoSecreto.length);
  const amigoSorteado = listaAmigoSecreto[indiceAleatorio];
  //Aquí mostramos el amigo secreto sorteado en el index HTML:
  document.getElementById("resultado").textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
}