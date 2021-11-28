const sqlite3 = require("sqlite3");

//neste caso vamos usar apenas o "open" da base do sqlite, assim buscamos diretamente apenas ele
const { open } = require("sqlite")

module.exports = () => 
    open({
        //receberá o caminho do banco de dados
        filename: './src/db/rocketq.sqlite',
        //driver é o que comanda o banco de dados
        driver: sqlite3.Database,
    });