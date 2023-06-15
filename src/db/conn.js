const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/olympics")
.then(()=>{
    console.log("Connection successfull");
})
.catch((err)=>{
    console.log("Connection not successful");
    console.log(err);
})