const mongoose=require('mongoose')
const {Schema}=mongoose
const bilelSchema = new Schema({
    name:{ type:String, required:true},
    age:{type:Number},
    favoriteFood : [String]
})
const Person=mongoose.model('bilel',bilelSchema)
module.exports=Person;