const express = require('express');
const app = express()
const routes = require('./src/routes')
//const swaggerUi = require('swagger-ui-express');


app.use(express.json())

app.use(routes);
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger_output.json')));
app.listen(5555, () => console.log('🔥 Servidor executando na porta 5555'))