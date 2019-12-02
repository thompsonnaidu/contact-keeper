const express=require('express');

const router=express.Router();

// @route get api/contacts
// @desc get all users contact
// @access Private
router.get('/',(req,res)=>{
    res.send("Get all user contact")
});

// @route POST api/contacts
// @desc add contact
// @access Private
router.post('/',(req,res)=>{
    res.send("Add contact")
});

// @route POST api/contacts/:id
// @desc Update contact
// @access Private
router.put('/:id',(req,res)=>{
    res.send("update contact")
});

// @route POST api/contacts/:id
// @desc Delete contact
// @access Private
router.delete('/:id',(req,res)=>{
    res.send("update contact")
});


module.exports=router;