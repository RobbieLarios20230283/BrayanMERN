// importo el archivo app

import app from "./app.js"
import "./database.js"
import { config } from "./config.js";

//crea una funcion que se encarga de ejecutar el servidor

async function main() {
app.listen(config.server.port)  
console.log("Server is runningin")  
}

//ejecutamos todo

main();