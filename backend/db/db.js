const mongoose = require('mongoose')

exports.dbConnect = async () => {
    try{
        // mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected");
    }catch(err){
        console.log("DB conncection error ", err);
    }
}