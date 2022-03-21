// data
// const Products=[
//     {
//         id:1,
//         name:" product A"
//     },
//     {
//         id:2,
//         name:" product Bcdfghjkl"
//     }
// ];

import mongoose from "mongoose";
//creat model
const Product= mongoose.model("Product", { name : String}) // Têm db phải là chữ hoa đầu

// show all products
export const list= async (req,res)=>{
    try {
        const lists= await Product.find();
        res.json(lists);
    } catch (error) {
        res.status(400).json({
            message : "khong tim duoc san pham !"
        })
    }
}

// show a product
export const read= async (req,res)=>{
    const reads= { _id: req.params.id}
    try {
        const geta= await Product.findOne(reads);
        res.json(geta);
    } catch (error) {
        res.status(400).json({
            message : "khong tim duoc san pham !"
        })
    }
   
}

// add product
export const creat= async (req,res)=>{ 
    
    try {
        const creats = await new Product(req.body).save();
        res.json(creats);
    } catch (error) {
        res.status(400).json({
            message : "khong them duoc san pham !"
        })
    }
    
}

export const remove= async (req,res)=>{
    const ids= { _id: req.params.id}
    try {
        const removes= await Product.findOneAndDelete(ids);
        res.json({
            message: "Đã xóa thành công !",
            data: removes
        });
    } catch (error) {
        res.status(400).json({
            message : "khong xoa duoc san pham !"
        })
    }
}
export const update= async (req,res)=>{  // or patch
    const condition= { _id: req.params.id}
    const doc= req.body;
    const option = { new: false };
    try {
        const updates= await Product.findOneAndUpdate(condition,update,option);
        res.json(updates);
    } catch (error) {
        res.status(400).json({
            message : "khong updata duoc san pham !"
        })
    }
}