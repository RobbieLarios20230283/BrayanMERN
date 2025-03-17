import { type } from "express/lib/response"
import {Schema,model} from "mongoose"

const reviewsSchema = new Schema(
    {
        Comment:{
            type:String,
            require: true
        }
        ,
        rating:{
            type:Number,
            requiere: true,
            min:0,
            max:5
        }
        ,
        idClient:{
            type: Schema.Types.ObjectId,
            ref:"clients",
            require: true
        }
        
    }
    ,
        {
            timestamps:true,
            strict:false
        }
);
export default model("reviews",reviewsShema)