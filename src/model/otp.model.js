const mongoose=require("mongoose")
const express=require("express")

const otpSchema=new mongoose.Schema({
phoneNumber:{type:Number,require:true},
otp:{type:Number}
}
,{
timestamps:true,
versionKey:false
}
)

const Otp=mongoose.model("verify",otpSchema)

module.exports=Otp