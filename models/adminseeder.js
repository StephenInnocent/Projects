const {model,Schema} = require("mongoose");

const adminSchema = new Schema({
    name: {
        type: String,
        min: 4
    },
    email:{
        type:String,
        unique:true
    },
    passport: String,
    password:{
        type: String,
        min: 8,
        select: false
    },
    AdminID:{
        type:String
    },
    Reviews: Array,
    AdminResourcess: Array({
        name:String,
        location: String,
        fileSize:String,
        fileType: String
    })
},{timestamps: true});

const Admin = model("Admin",adminSchema);

module.exports = Admin;