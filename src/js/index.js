/* 
    O que precisamos fazer? - Quando clicar no botão do persongem 
    na lista, temos que marcar o botão como selecionado e mostra 
    o personagem correspondente.

    OBJETIVO 1 -  Quando clicar no botão do personagem na lista,
    marcar o botão como selecionado. 
        Passo 1 - Pegar os botões no JS pra poder verificar
        quando o usuário clicar em cima de um deles.
        Passo 2 - Adicionar a classe "selecionado" no botão que 
        o usuário clicou.
        Passo 3 - Verificar se já existe um botao selecionado, 
        se sim, devemos remover a seleção dele.
        
    OBJETIVO 2 - Quando clicar no botão do personagem mostrar as 
    informações do personagem.
        Passo 1 - Pegar os personagens no JS pra poder mostrar ou
        esconder ele
        Passo 2 - Adicionar a classe "selecinonado" no personagem que
        o usuário selecionou.
        Passo 3 - Verificar se já existe um personagem selecionado, 
        se sim, devemos remover a seleção dele.
*/

// OBJETIVO 1 -  Quando clicar no botão do personagem na lista, marcar o botão como selecionado. 
// Passo 1 - Pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles.

const botoes = document.querySelectorAll(".botao")
const personagens = document.querySelectorAll(".personagem")



botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao()
        desselecionarPersonagem()

        botao.classList.add("selecionado")
        personagens[indice].classList.add("selecionado");
    })
})

function desselecionarPersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado")
    personagemselecionado.classList.remove("selecionado")
}

function desselecionarBotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado")
    botaoselecionado.classList.remove("selecionado")
}
