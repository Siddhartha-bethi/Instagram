const express = require('express');
const userModel=require("../db/models/userModel");
const {AddToCollection, getData} = require("../db/DBInteraction");
const { json } = require("express")
const router=express.Router()

router.post("/getuser",async (req,res)=>{
    let filter = {}
    if(req.body.username){
        filter = {...filter,username:req.body.username}
    }
    if(req.body.password){
        filter = {...filter,password:req.body.password}
    }
    console.log("filter is ",filter);
    let res1= await getData(userModel,filter);
    console.log("giving user details are " ,res1);
    res.status(200).json(res1);
})

router.post("/adduser",async (req,res)=>{
    console.log("received is ",req.body);
    let res1= await AddToCollection(userModel,req.body);
    console.log("res1 is " ,res1);
    res.status(200).json(res1);
})
module.exports= router;