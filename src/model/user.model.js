const mongoose=require("mongoose")
const express=require("express")

const userSchema=new mongoose.Schema({
name:{type:String,require:true},
email:{type:String,require:true},
password:{type:String,require:true},
phoneNumber:{type:Number,require:true}
}
,{
timestamps:true,
versionKey:false
}
)

const User=mongoose.model("user",userSchema)

module.exports=User