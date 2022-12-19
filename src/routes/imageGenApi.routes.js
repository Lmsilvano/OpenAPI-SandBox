const express = require('express')
const imageGenApiRoutes = express.Router()
const imageGenApiController = require('../../controllers/imageGenApiController')
//const multer = require('multer')
//const upload = multer()
//financialRoutes.post('/v1/finance/:userId', upload.single('Financial Data'), financialController.insertFinancialData)
//financialRoutes.delete('/v1/finance/:userId/:financialId', financialController.deleteFinancialData)
imageGenApiRoutes.get('/generateimg', imageGenApiController.create)


module.exports = imageGenApiRoutes