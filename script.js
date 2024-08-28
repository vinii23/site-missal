// (1) Constante para armazenar a curiosidade
const curiosity = "Missal é uma cidade do Paraná.";

// (2) Função para mostrar a curiosidade ao usuário
function showCuriosity() {
    const messageElement = document.getElementById('message');
    // (3) Condicional para verificar se a curiosidade já foi mostrada
    if (messageElement.innerHTML === curiosity) {
        messageElement.innerHTML = "É isso";
    } else {
        messageElement.innerHTML = curiosity;
    }
}