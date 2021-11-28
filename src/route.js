//importando arquivos
const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

// ativação das rotas
const route = express.Router()



// definindo as rotas
/*explicando o que foi feito abaixo:
'/': é a página principal (rota) e está sendo atrelada para abrir o arquivo "index.ejs"
res.render: */
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))
route.get('/room/:room', (req, res) => res.render("room"))

/*Rota que irá buscar direto de outro arquivo o req res*/
route.post('/question/:room/:question/:action', QuestionController.index)
//Rota que haverá na criação da sala
route.post('/create-room', RoomController.create)

//exportando a const route para ser usado em outros arquivos
module.exports = route


/* Diferença entre get e post:
get: vai pegar, buscar da rota
post: vai postar, inserir na rota

Diferença entre req e res:
req: é a requisição da página 
res: é a resposta (renderização)
*/