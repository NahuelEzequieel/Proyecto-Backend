const express = require ('express')
const router = express.Router()
const apiController = require('../controller/apiController')
const {validarItem} = require ('../middlewares/validarItem')
const checks = require ('../middlewares/checks')
const {validarChecks} = require('../middlewares/validarChecks')


router.get('/catalogo', apiController.apiCatalog)
router.post('/aniadir', checks, validarChecks, apiController.apiAdd)
router.put('/editar/:id',validarItem,checks,validarChecks, apiController.apiEdit)
router.delete('/eliminar/:id',validarItem, apiController.apiDelete)

module.exports = router