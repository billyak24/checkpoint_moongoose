const mongoose = require ('mongoose')
const connectDB = async()=>{
    try {
        mongoose.connect('mongodb://localhost:3000/bilel');
    } catch (error) {
        handleError()
    }
}
module.exports = connectDB