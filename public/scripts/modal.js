// exportando a função Modal()
export default function Modal(){
    //variavel que irá buscar o que tiver na classe modal-wrapper
    const modalWrapper = document.querySelector('.modal-wrapper')

    //irá chamar a funçção close
    const cancelButton = document.querySelector('.button.cancel')
    cancelButton.addEventListener("click", close)


    function open(){

        //a função vai adicionar a classe "active"
        modalWrapper.classList.add('active')


    }
    function close(){
        //ira remover a classe "active"
        modalWrapper.classList.remove('active')
    }

    return{
        open,
        close
    }
}