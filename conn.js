const mongoose = require("mongoose");

exports.connectMongoose = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/to-do-list").then(() => {
        console.log(" connection successful");
    }).catch((e)=>{
        console.log(" no connection");
    });
}

const userSchema = new mongoose.Schema({
    task : String
})

exports.task = mongoose.model("task",userSchema);
