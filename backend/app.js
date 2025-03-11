//Crear el servidor , importo todas las libreria con install express //
import express from "express";
import clientsRoutes from "./src/routes/clients.js";
import productsRoutes from "./src/routes/products.js"

// Creo una constate = a la libreria que importe y la ejecuta
const app = express();
//Uso midle war para que
app.use(express.json())
// contante para usar expres
app.use("/api/products",productsRoutes)
app.use("/api/clients",clientsRoutes)

export default app;