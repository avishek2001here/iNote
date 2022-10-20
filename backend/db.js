const mongoose = require('mongoose');


const connectToMongoose=()=>{
    mongoose.connect('mongodb://localhost:27017/iNote');
    console.log("connected successfully");
}

module.exports=connectToMongoose;