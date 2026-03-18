import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    confirmPassword:{type:String,required:true}
})

const Login = mongoose.model("Login",loginSchema)

export default Login