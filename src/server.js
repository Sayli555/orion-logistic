const express=require("express")
const mongoose=require("mongoose")
const connect=require("./configu/db")
const userController=require("./controller/user.controller")
const loginController=require("./controller/login.controller")
require("dotenv").config()
const app=express()
app.use(express.json())

app.use("/users",userController)
app.use("/login",loginController)

app.listen(process.env.PORT,async()=>{
    try {
        await connect()
        console.log(`server is connecting on ${process.env.PORT}`)
    } catch (error) {
       console.log(error) 
    }
})