const botaomostrarprojetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo');



botaomostrarprojetos.addEventListener('click', () => {
  MostrarMaisProjetos();
  esconderBotao();
})

function esconderBotao() {
    botaomostrarprojetos.classList.add("remover");
}

function MostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}
