import express from "express";
import mongoose from "mongoose";
import bodyParser from 'express'
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from 'cors'
const app = express(); 

app.use(bodyParser.json())
app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
 
}))

// userRouter
app.use('/api',userRouter)

// recipeRouter
app.use('/api',recipeRouter)

mongoose.connect("mongodb+srv://allurikavya48_db_user:IFXPfOWtzxbSWE2W@cluster0.ypsf2nj.mongodb.net/",{
    dbName: "COOK_EASE"
}
).then(()=>console.log("Connected to MongoDB Atlas")).catch((err)=>console.log("err.message"));

const port=3000;

app.listen(port, ()=> console.log(`Server running on port ${port}`));

//mongodb atlas credentials
//username= allurikavya48_db_user
//password= IFXPfOWtzxbSWE2W

