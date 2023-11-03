const {Schema, model} = require ('mongoose')

const schema = new Schema ({
    marca : {
        type : String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    cilindrada : {
        type: Number,
        required: true
    },
    precio :{
        type: Number,
        required: true
    },
    caja : {
        type : String
    },
    descripcion : {
        type: String
    }
})

const Emotorcycle = model("Emotorcycle", schema)
module.exports = {Emotorcycle}