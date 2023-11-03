const mongoose = require ('mongoose')
mongoose.set('strictQuery', false)
require('dotenv').config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.CONNECT_MDB)
        console.log('database ON')
    } catch {
        console.log('database OFF')
    }
}

module.exports = {connect}