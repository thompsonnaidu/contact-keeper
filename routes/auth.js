const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require('config');
const { check, validationResult } = require('express-validator');
const User=require('../models/Users')
const auth=require("../middleware/auth")

// @route GET api/auth
// @desc Get login user
// @access Private
router.get('',auth, async (req,res)=>{
    

    try{
        const user = await User.findById(req.user.id).select("-password");
        res.json({user})
    }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
});

// @route POST api/auth
// @desc Auth user and get token
// @access Private
router.post('/',[ 
    check('email',"Please include a valid email").isEmail(),
    check('password',"Password is required").exists(),
    
], async (req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array() });
    }

    const {email,password}=req.body;
    try{
        let user= await User.findOne({ email });
        
        if(!user){
            return res.status(400).json({ msg: 'Invalid Credentials'});

        }

        const isMatch= await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({ msg: 'Invalid Credentials'});

        }

        const payload={
            user:{
                id:user.id
            }
        }
        jwt.sign(payload,config.get('jwtSecretKey'),{ expiresIn: 36000 }, (err,token)=>{
            if( err ) throw err;
            res.json({token});
        })

    }catch(err){
        console.log("I amd in ",err)
        res.status(500).send("server error")
    }
});


module.exports=router;