const {MongoClient} = require('mongodb');
const {mongoose} = require("mongoose");

async function connectDb(uri){
    try{
        const client = new MongoClient(uri);
        mongoose.connect(uri);
        await client.connect(uri);
        console.log(`Connected to db @ ${client.options.srvHost}`);
    }catch(e){
        console.log(`failed to connect to db due to ${e.message}`);
        console.log(e);
        process.exit(1);
    }
}

module.exports = connectDb;