const jwt=require("jsonwebtoken")
const client=require("../config/redis");
const fs=require("fs");
const authenticate=async(req,res,next)=>{
const token=req.headers.authorization;

console.log(token,"1234");
const blacklist=fs.readFileSync("./blacklist.json",{encoding:"utf-8"});
if(blacklist.includes(token)){
    res.send("login again")}
    else if(token){
   const decoded=jwt.verify(token,"9168");
   if(decoded){
    console.log(decoded);
//    let t= await client.get(`${token}`);
<<<<<<< HEAD
    // if(t){
        // res.status(404).send({"msg":"login again"})
    // }else {
=======
//     if(t){
//         res.status(404).send({"msg":"login again"})
//     }else {
>>>>>>> 4179a8b79b93f7b8e441602541417b9f217da922
        const userID=decoded.userID;
        req.body.userID=userID;
        req.body.role=decoded.role
        next();
//   }
   
   }else {
    res.status(404).send({"msg":"please login first........."})
   }
}else {
    res.status(404).send({"msg":"please login first........."})
}
}
module.exports={
    authenticate
}