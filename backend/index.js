// importo el archivo app

import app from "./app.js"
import "./database.js"

//crea una funcion que se encarga de ejecutar el servidor

async function main() {
const port  = 4000;
app.listen(port)  
console.log("Server is runningin")  
}

//ejecutamos todo

main();