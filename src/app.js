const http= require ("http");
// const express= require("express");
import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import productRouter from "../router/product";
import categoryRouter from "../router/category";
const app = express();

// used middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json()); //formendcode : upload ảnh

// router
app.use("/api", productRouter);
app.use("/api",categoryRouter);

// connect datab
mongoose.connect('mongodb://127.0.0.1:27017/web16306')
    .then(() => console.log("Kết nối thành công!"))
    .catch((error) => console.log("kết nối thất bại !"))
//
app.get("/",(req,res)=>{
    res.send("<h1>HomePage</h1>")
});



const PORT=3001;
app.listen(PORT, ()=>{
    console.log("server runing port", PORT);
})