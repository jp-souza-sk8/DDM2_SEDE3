// Adiciona um evento de clique ao botão
document.getElementById("botao").addEventListener("click", contarCliques);

// Função para contar os cliques
function contarCliques() {
    // Obtém o elemento do contador
    var contadorElemento = document.getElementById("contador");
    
    // Obtém o valor atual do contador como texto e converte para número
    var contador = parseInt(contadorElemento.textContent);
    
    // Incrementa o contador
    contador++;
    
    // Atualiza o texto do contador
    contadorElemento.textContent = contador;
}
