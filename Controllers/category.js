import category from "../model/category";

export const create= async (req,res) =>{
    console.log(req.body);
    try {
        const category = await new Category(req.body).save()
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}