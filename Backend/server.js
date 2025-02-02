import express from "express";
const app = express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello");

})
app.listen(5000,()=>{

  console.log('Server started at port 5000');
    
})