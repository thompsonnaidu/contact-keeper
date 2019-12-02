const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs')
const { check, validationResult } = require('express-validator');

const User=require('../models/Users')

// @route POST api/users
// @desc Register a user
// @access Public
router.post('/',[
    check("name","Name is required").not().isEmpty(),
    check("email","Please include valid email").isEmail(),
    check("password","Please enter password with 8 or more character").isLength({ min :6 })
], async (req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array() });
    }
    
    const {email,name,password}=req.body;
    try{
        let user = await User.findOne({ email });

        //Checking if there is an existing register email
        if(user){
            return res.status(400).json({msg:"User already exits"})
        }

        user= new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password= await bcrypt.hash(password,salt);
        await user.save();
        res.send("user save")

    }catch(err){
        console.log("I amd in ",err)
        res.status(500).send("server error")
    }

});


module.exports=router;