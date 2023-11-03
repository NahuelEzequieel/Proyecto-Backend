const {check} = require('express-validator')

const checks = [
    check('marca')
        .notEmpty().withMessage('El campo marca es obligatorio')
        .isString().withMessage('El campo marca debe ser de tipo string'),
    check('modelo')
        .notEmpty().withMessage('El campo modelo es obligatorio')
        .isString().withMessage('El campo modelo debe ser de tipo string'),
    check('cilindrada')
        .notEmpty().withMessage('El campo cilindrada es obligatorio')
        .isNumeric().withMessage('El campo cilindrada debe ser de tipo number'),
    check('precio')
        .notEmpty().withMessage('El campo precio es obligatorio')
        .isNumeric().withMessage('El campo precio debe ser de tipo number')    
]

module.exports = checks