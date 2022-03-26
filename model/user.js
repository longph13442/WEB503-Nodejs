import mongoose, {Schema} from "mongoose";
const userSchema = new Schema({
    name :{
        type : String,
        required : true,
        maxlength: 30
    },
    email:{
        type : String,
        required : true,
        unique: true
    },
    password:{
        Type: String,
        required : true
    }
}, {timestamps: true})
export default mongoose.model('User', userSchema);