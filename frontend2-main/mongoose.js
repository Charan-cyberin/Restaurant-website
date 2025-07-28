const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://shaikhameedazeez:root123456@cluster0.oh9lykj.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection