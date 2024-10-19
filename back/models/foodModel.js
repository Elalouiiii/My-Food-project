import mongoose from "mongoose";


const foodsSchema = mongoose.Schema({
    name:{
      type:String,
      required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:true,
    },
}) ;

const Food = mongoose.model('food', foodsSchema)
export default Food; 