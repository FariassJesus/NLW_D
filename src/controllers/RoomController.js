const Database = require("../db/config")

module.exports = {
    async create(req, res){
        const db = await Database()
        //buscando o valor inserido pelo usuário como senha
        const pass = req.body.password

        let roomId
        //aqui irá replicar 6 vezes a função abaixo
        for(var i = 0; i < 6; i++){
            //pega um numero aleatório (de 0 a 1) e multiplica por 10
            //para não haver soma dos valores resultantes, o .toString é usado para concatenar tudo como string
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
            roomId += Math.floor(Math.random() * 10).toString()
            
        }


// parseInt é usado para converter strings para números, ja que a variável acima criou o id como uma string
        await db.run(`INSERT INTO rooms (
            id,
            pass
        ) VAlUES (
            ${parseInt(roomId)},
            ${pass}
        )`)

        await db.close()

        res.redirect(`/room/${roomId}`)

    }
}
/* Códigos para uso de banco de dados:
INSERT INTO: inserir no campo...
VALUES: os valores que serão inseridos

 */