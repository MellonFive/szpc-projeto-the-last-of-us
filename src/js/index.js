/* OBJETIVO: Quando clicarmos no botão temos que mostrar a imagem de fundo corespondente 

  Passo 1 - Dar um jeito de pegar o elemento HTML dos botões
  
  Passo 2 - Dar um jeito de indentificar o clique do usuário no botão

  Passo 3 - Desmarcar o botão selecionado anterior

  Passo 4 -  Marcar o botão clicando como se estivesse selecionada

  Passo 5 -  Esconder a imagem de fundo anterior

  Passo 6 - Fazer aparecer a imagem de fundo correspondente ao botão clicado

*/


// Passo 1 - Dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

// Passo 2 - Dar um jeito de indentificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    // Passo 3 - Desmarcar o botão selecionado anterior
    desativarBotaoSelecionado();

    // Passo 4 - Marcar o botão clicando como se estivesse selecionada
    selecionarBotaoCarrossel(botao);

    // Passo 5 - Esconder a imagem ativa de fundo
    esconderImagemAtiva();

    // Passo 6 - Fazer aparecer a imagem de fundo correspondente ao botão clicado
    mostrarImagemDeFundo(indice);
  })
})

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
  botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}
