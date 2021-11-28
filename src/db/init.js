/********** COMANDOS EM SQL DEVERÃO SEMPRE SER FEITOS EM CAIXA ALTA E AS TABELAS EM CAIXA BAIXA ********/
// local que terá todas as tabelas do banco de dados
const Database = require("./config")

//irá iniciar o banco de dados
const initDb = {
    //async precisa estar presente sempre que o await for ser utilizado
    async init(){
        //await vai fazer esperar terminar de rodar o database antes de passar para a próxima função
        const db = await Database()
        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT
        )`);
        
        /* IMPORTANTE FECHAR O BANCO DE DADOS NO FINAL */
        await db.close()
    }
}

initDb.init();

/* Explicando sobre o código usado no sql:

CREATE TABLE: está criando a tabela (rooms);
id e pass: campos da tabela;
INTEGER: significa que só receberá números;
TEXT: significa que poderá receber qualquer valor no campo;
PRIMARY KEY: significa que os ids nunca poderão ser repetidos
AUTOINCREMENT: o próprio banco de dados trará os números Ex: 1,2,3,4, caso o 4 seja apagado, o próximo número a ser
criado é o 5 mesmo com a exclusão, não permitindo a repetição
INT: se foi checada a questão (1) ou não (2)
*/

