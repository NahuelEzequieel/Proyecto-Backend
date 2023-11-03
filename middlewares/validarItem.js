const {Emotorcycle} = require('../models/emotorcycle')

const validarItem = async (req,res, next) => {
    try {
        const busqueda = await Emotorcycle.findById(req.params.id)
        if (busqueda !== null) {
            next()
        }else {
            res.status(400).json({
                msg: 'el id ingresado ' + req.params.id + ' no es valido'
            })
        }
    } catch{
        res.status(400).json(error)
    }
}

module.exports = {validarItem}