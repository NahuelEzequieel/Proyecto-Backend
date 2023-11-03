const {Emotorcycle} = require ('../models/emotorcycle')

const apiController = {

    async apiCatalog(req,res){
        const catalogo = await Emotorcycle.find()
        res.json(catalogo)
    },

    async apiAdd(req,res){
        const motoAgregada = new Emotorcycle(req.body)
        await motoAgregada.save()
        res.status(201).json(motoAgregada)
    },

    async apiEdit(req,res){
        await Emotorcycle.findByIdAndUpdate(req.params.id, req.body)

        const resultado = await Emotorcycle.findById(req.params.id)

        res.status(201).json(resultado)
    },

    async apiDelete(req,res){
        await Emotorcycle.findByIdAndDelete(req.params.id)
        res.status(200).json({
            msg: 'La moto con el id '+ req.params.id + ' fue eliminada correctamente'
        })
    }
}

module.exports = apiController