import mongoose from "mongoose";
import { config } from "./config.js";


// guardo la constante pongo la direccion de la base

mongoose.connect(config.db.URI)

//comprobaciòn
const connection = mongoose.connection;

connection.once("open",() =>{console.log("DB is conected")});


connection.once("disconnected",() =>{console.log("DB is disconected")});


connection.once("error",() =>{console.log("error found"+ error)});