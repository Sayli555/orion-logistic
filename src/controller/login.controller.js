const express=require("express")
const User=require("../model/user.model")
const Otp=require("../model/otp.model")
const otpgenertor=require("../utils/otpgenerator")
const router=express.Router()

router.post("",async(req,res)=>{
    try {
        const login=await User.findOne({phoneNumber:req.body.phoneNumber})
        if(!login){
            return res.status(404).send("not found user")
        }
        let isOtp=await Otp.findOne({phoneNumber:req.body.phoneNumber})
        let otp;
        if(!isOtp){
            otp=otpgenertor()
            await Otp.create({
                phoneNumber:req.body.phoneNumber,
                otp
            })
        }
        else{
            otp=isOtp.otp
        }
        
        
        res.status(201).send({login,otp})
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/verify",async(req,res)=>{
    let {phoneNumber,otp}=req.body
    try {
        const login=await Otp.findOne({phoneNumber})
        if(!login){
            return res.status(404).send("not found otp")
        }
        if(login.otp!=otp){
            return res.status(404).send("not found otp")
        }
        await Otp.findOneAndDelete({phoneNumber})
        res.status(200).send({login,msg:"verified"})
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports=router