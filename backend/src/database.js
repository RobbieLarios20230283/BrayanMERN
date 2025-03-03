import mongoose from "mongoose";
// guardo la constante pongo la direccion de la base
const URI = "mongodb://localhost:27017/cocacolaDB"



mongoose.connect(URI)

//comprobaciòn
const connection = mongoose.connection;

connection.once("open",() =>{console.log("DB is conected")});


connection.once("disconnected",() =>{console.log("DB is disconected")});


connection.once("error",() =>{console.log("error found"+ error)});