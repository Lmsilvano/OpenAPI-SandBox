const express = require('express')
const routes = express.Router()
const imageGenApiRoutes = require('./imageGenApi.routes')
//const userRoutes = require('./v1/user.routes')

routes.use('/api', [imageGenApiRoutes])


module.exports = routes