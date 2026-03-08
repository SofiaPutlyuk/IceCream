import mongoose from "mongoose"

const registrationSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    confirmPassword:{type:String,required:true}
})
const registration = mongoose.model("Registration",registrationSchema)

module.exports = registration