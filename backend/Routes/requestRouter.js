const express = require('express');
const requestModel=require("../db/models/requestsModel");
const {AddToCollection, getData, deleteData} = require("../db/DBInteraction");
const { json } = require("express")
const router=express.Router()


router.get("/getrequests",async (req, res) => {
    let filter = {

    }
    if(req.query.from){
       filter = {
        ...filter,from:req.query.from
       }
    }
    if(req.query.to){
        filter = {
         ...filter,to:req.query.to
        }
     }
     let res1=await getData(requestModel,filter);
     res.status(200).json(res1);
});

router.post("/addrequests",async(req,res)=>{
   let obj = req.body;
   console.log("body fior request is ",obj);
   let res1= await AddToCollection(requestModel,obj);
   res.status(200).json(res1);
})

router.post("/deleterequests", async(req,res)=>{
   let filter = req.body
   console.log("body fior to deelte is ",filter);
   let res1= await deleteData(requestModel,filter);
   res.status(200).json(res1);
})

module.exports=router;