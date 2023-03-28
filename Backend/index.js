const express = require("express");
const cors = require("cors");
const { UserRouter } = require("./Routers/Login_Sign_Up_Routes");
const { connection } = require("./config/db");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.send("HOME")
});  
app.use("/user", UserRouter);  

app.listen(9168, async () => {
    try {
        await connection;
        console.log(`Connected To DB🎉`)
    } catch (error) {
        console.log("ERROR",error.message)
    }
  console.log(`Server is running at 9168✅`);
});