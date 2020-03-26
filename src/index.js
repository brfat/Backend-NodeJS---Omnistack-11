const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
/*
Para colocar em produção
app.use(cors({
origin: 'http://linkdoprojeto.com'
}));*/

app.use(express.json());
app.use(routes);


app.listen(3333);

/*

Métodos HTTP:

GET: Buscar/listar uma informação no back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end

*/

/*

Tipos de parametros:

Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 

*/

/*

 SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL server
 NOSQL: MongoDB, CouchDB, etc

*/ 