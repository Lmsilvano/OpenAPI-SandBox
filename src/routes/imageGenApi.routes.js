const express = require('express')
const imageGenApiRoutes = express.Router()
const imageGenApiController = require('../controllers/imageGenApiController')
//const multer = require('multer')
//const upload = multer()
//imageGenApiRoutes.post('/path', upload.single('name'), imageGenApiController.uploadImg)

imageGenApiRoutes.get('/generateimg', imageGenApiController.create)


module.exports = imageGenApiRoutes