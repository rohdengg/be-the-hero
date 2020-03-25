const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //modulo de segurança (quem pode accessar a aplicação)
app.use(express.json());
app.use(routes);

app.listen(3333);

// rota/recurso

/* Metodos HTTP:
    get: buscar informação do back-end
    post: criar informação no back-end
    put: alterar informação do back-end
    deelte: deletar informação do back-end


Tipos de parametros:
    query: paramentros nomeados inviados na rota após "?" (Filtros, paginação)
    route: paramentros utilizados para identificar recursos
    body: corpo da requisição, utilizado para criar e alterar recursos


Banco de dados:
    SQLite
    QueryBuilder: comandos do banco de dados com JS, funciona pra qualquer SQL    

*/


