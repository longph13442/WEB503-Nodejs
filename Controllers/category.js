import mongoose from "mongoose";
import category from "../model/category"

export const create= async (req,res) =>{
    console.log(req.body);
    try {
        const categorys = await new category(req.body).save();
        res.json(categorys);
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}