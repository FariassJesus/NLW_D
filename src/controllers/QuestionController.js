module.exports = {
    index(req, res){
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        //processo para buscar a senha é diferente
        const password = req.body.password

//****para testar se está buscando de forma correta, é bom imprimir o código como abaixo
      console.log(`room = ${roomId}, question = ${questionId}, action = ${action}, password = ${password}`)  
    }
}