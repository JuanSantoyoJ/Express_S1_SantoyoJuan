import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,min:0}
},{timestamps:true})





class userClass{
    get isAdult(){
        return (this.age ?? 0) >= 18;
    }
    static async findByEmail(email){
        return this.findOne({email});
    }
}



userSchema.loadClass(userClass);

export const userModel = mongoose.model("User",userSchema)