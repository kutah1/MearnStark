import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config()
app.use(express.json())
app.get('/products',(req,res)=>{
    res.send("Hello");

})
console.log(process.env.MONGO_URI)
app.listen(5000,()=>{

  console.log('Server started at port 5000');
    
})