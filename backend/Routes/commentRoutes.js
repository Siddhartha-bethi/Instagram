const express = require('express');
const commentModel=require("../db/models/commentModel");
const {AddToCollection, getData} = require("../db/DBInteraction");
const { json } = require("express")
const router=express.Router()

router.get("/getcomments", async (req,res)=>{
  console.log("came to getcommenmt");
  const postid = req.query.postid;
  console.log("get is ",postid);
  let myres= await getData(commentModel,{postid:postid});
  console.log(myres);
   res.json(myres);
})

router.post("/postcomments", async (req,res)=>{
    const obj1 = {
        postid: req.body.postid,
        comments: {
            time:req.body.time ,
            username: req.body.username,
            content: req.body.content
        }
    }
    console.log("adding comment",obj1)
   let res2= AddToCollection(commentModel, obj1);
   return res2;
  })

module.exports=router;