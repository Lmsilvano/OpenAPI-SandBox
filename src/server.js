const express = require('express');
const app = express()
const routes = require('./routes/index')
//const swaggerUi = require('swagger-ui-express');


app.use(express.json())

app.use(routes);
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger_output.json')));
app.listen(5545, () => console.log('🔥 Servidor executando na porta 5545'))