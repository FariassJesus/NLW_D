// importando a função Modal()
import Modal from './modal.js'

const modal = Modal()

//mapeando as classes de código que devem ser alteradas conforme se utilize a modal para excluir ou marcar pergunta como lida
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//quando o marcar como lido for clicado
//irá buscar tudo que tiver dentro da classe .actions for a (link) e tiver a classe .check
const checkButtons = document.querySelectorAll(".actions a.check")

//forEach (para cada) vai pegar tudo que tiver as características acima e atribuir a variável button
checkButtons.forEach(button => {
//vai verificar quando houver click e adicionar a variavel event que irá buscar direto a função de abrir modal
    button.addEventListener("click", handleClick)

        //tag innerHTML vai alterar o texto do HTML

})

// abre a modal quando o botão "Excluir for clicado"
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    //como aqui tivemos que passar o check como false, é necessário colocar o event para a função
    //event é a variável que irá guardar todos os atributos (classes e ids) verificados no click do mouse
    button.addEventListener("click", (event) => handleClick(event, false))
})

/* o handleClick irá receber o */
function handleClick(event, check = true){
    //preventDefault é para tirar a função de link da tag "a" que está nos botões e aparecem na url da pagina
    event.preventDefault()
    /* variável criada para concatenar frases que se repetirão no código
check ? = se check for true altera o código para "Marcar como lido"
: = Se for false altera para "Excluir essa pergunta */
    const text = check ? "Marcar como lida" : "Excluir"
    
    const slug = check ? "check" : "Excluir"
    const roomId = document.querySelector("#room-id").dataset.id
// irá buscar direto da variavel event que possui todos os atributos verificados no click do mouse sua data-id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    //setAttribute: vai alterar o action do form la do room.ejs e inserir as variáveis descritas
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

/* Explicando o código abaixo: 
innerHTML = altera diretamente o que está no HTML
`${variável} + frase`: está concatenando a const text ao texto que se repetirá*/
    modalTitle.innerHTML = `${text} esta pergunta`
    //toLowerCase coloca todas as letra da variável como minúsculas
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    //abrir a modal
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    //alterando as cores do botão adicionando e removendo a classe "red" 
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()
}