// variável para trazer o express
const express = require('express')

//importando o arquivo route
const route = require('./route')

//importando o path para mostrar o caminho da pasta views
const path = require('path')


// variável para ativar o express
const server = express()

//definindo a view engine para rodar o server no navegador
server.set('view engine', 'ejs')

/* importando a pasta "public" de forma estatica (buscando todos os caminhos que ja estavam lá) para 
ser usada na nossa aplicação*/
server.use(express.static("public"))


/*explicando o que foi feito abaixo:
path: vai buscar o caminho da pasta do arquivo atual (no caso a pasta nlw_2);
join: junta
__dirname: trará a pasta na qual nosso arquivo atual pertence (src no caso);
views: é a pasta que será acessada para achar o arquivo */
server.set('views', path.join(__dirname, 'views'))


//middleware: para extrair a senha de forma segura e que não apareça no navegador será necessário usar 
server.use(express.urlencoded({extended: true}))

//para o node começar a usar o arquivo "route"
server.use(route)

// vai ativar o server com sua determinada porta e a função para verificar se está funcionando
server.listen(3000, () => console.log('RODANDO') )