const express = require("express"); //using express js framework
const bodyParser = require("body-parser");
const app= express(); //app contains all the contents of express
const cors=require("cors")
app.use(cors({origin:"*"}))
app.use(express.json())
const postRouter = require("./Routes/postRoutes");
const commentRouter = require("./Routes/commentRoutes");
const userRouter = require("./Routes/userRoutes");
const requestRouter = require("./Routes/requestRouter");
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Welcome to home page of backend");
})

app.use("/comments",commentRouter);
app.use("/post",postRouter);
app.use("/user",userRouter);
app.use("/requests",requestRouter);
app.listen("4000",()=>{
    console.log("port is listing to 4000");
})