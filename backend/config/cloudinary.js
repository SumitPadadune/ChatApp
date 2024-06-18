const cloudinary = require('cloudinary').v2
require('dotenv').config()

try{
    cloudinary.config({
        cloud_name:process.env.CLOUD_NAME,
        api_key:process.env.CLOUD_KEY,
        api_secret:process.env.CLOUD_KEY_SECRET
    })

}catch(err){
        console.log(error)  
}

module.exports = cloudinary