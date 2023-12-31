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
    },
    userResources: Array({
        name:String,
        location: String,
        fileSize:String,
        fileType: String
    })
},{timestamps: true});

const Users = model("Users",userSchema);

module.exports = Users;