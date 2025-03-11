//import a mongoose

import {Schema , model} from "mongoose";

//hago la base de datos
const clientsShema = new Schema({

    name : {type:String, require : true ,maxLength : 100},
    lastName: {type:String, require : true ,maxLength : 100},
    birthday : {type:String, require : true ,maxLength : 100},
    email : {type:String, require : true ,maxLength : 100},
    password : {type:String, require : true ,maxLength : 20,minLenghth: 8},
    telephone : {type:Number, require : true ,maxLength : 8,minLenghth: 8},
    dui : {type:Number, require : true ,maxLength : 9,minLenghth: 9},
    isVerified: {type: Boolean}
},
{
    timestamps:true,
    strict: false
}
);

// exportando para que se use en todas las funciones
export default model ("clients",clientsShema)