const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = async() =>{
    try{    
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log('Database connection sucessfull')
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(err){
        console.log(`${err.message}`)
        process.exit()
        
    }
}

module.exports = connectDB