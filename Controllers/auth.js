
export const signup = async (req,res) =>{
    try {
        const {name, email, password} = req.body;

        const existUser= await User.finOne({email}).exec();
        if(existUser){
            res.json({
                message: "Email khong ton tai !"
            })
        }
        const user= await new User({name,password, email}).save();
        res.json({
            user:{
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        res.json(400).json({
            message: "Không tạo được tìa khoản"
        })
    }
}