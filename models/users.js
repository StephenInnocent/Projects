const {model,Schema} = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        min: 4
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type: String,
        min: 8,
        select: false
    },
    userID:{
        type:String
    }
})