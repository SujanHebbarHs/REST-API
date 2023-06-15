const express = require("express");
require("./db/conn");
const mensRouting = require("./routers/men")
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(mensRouting);

app.listen(PORT,(err)=>{
    if(err)throw err;
    console.log(`Server running on port : ${PORT}`);
})