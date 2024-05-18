const express=require("express")
const User=require("../model/user.model")
const Otp=require("../model/otp.model")
const otpgenerator=require("../utils/otpgenerator.js")
const router=express.Router()
 
router.post("",async(req,res)=>{
    try {
        if(!req.body.name || !req.body.phoneNumber || !req.body.password ||!req.body.email ){
            return res.status(201).send("please provide valid details")
        }
        const user=await User.create(req.body)
        
        let otp=otpgenerator()
        await Otp.create({
            phoneNumber:req.body.phoneNumber,
            otp
        })
        res.status(201).send({user,otp})
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get("",async(req,res)=>{
    try {
        const user=await User.find().lean().exec()
        userStore=user
        res.status(200).send({user})
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports=router