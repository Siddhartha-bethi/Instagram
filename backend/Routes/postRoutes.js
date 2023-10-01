const express = require('express');
const postModel=require("../db/models/postModel");
const {AddToCollection, getData} = require("../db/DBInteraction");
const userModel=require("../db/models/userModel");
const { json } = require("express")
const router=express.Router()


router.post("/addNewPost",async (req, res) => {
    try {
        const obj = {
            image: req.body.image,
            username: req.body.username,
            caption: req.body.caption
        }
        console.log("adding this ",obj);
        const savedPost = await AddToCollection(postModel, obj);
        console.log(savedPost);
        res.status(200).json({ message: "Upload successful" });
    } catch (error) {
        console.error("Error adding new post", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/getPosts",async (req,res)=>{
    let filter = {}
    if(req.query.username){
         filter={
            username:req.query.username
         }
    }
    try {
        const posts = await getData(postModel, filter);
        return res.json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ message: "Internal server error" });
    }
})

router.get("/getPublicPosts",async(req,res)=>{
    ans=[]
    try{
        const posts = await getData(postModel, {});
        userfilters = {
            accountType:"public"
        }
        console.log("posts are ",posts);
        let usersdata= await getData(userModel,userfilters);
        let users= usersdata.map((u)=>{
        return u.username
        })
        console.log("users are ",users.includes("siddhu"));
        ans= posts.filter((p)=>{
            return users.includes(p.username)
        })
        console.log("data sending is ",ans);
        res.json(ans)
    }
    catch(error){
        console.log("error for public imgaes", error);
       res.status(500).json({message: "problem in getting public posts"});
    }
    
})
module.exports=router;