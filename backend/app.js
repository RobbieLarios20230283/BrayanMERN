//Crear el servidor , importo todas las libreria con install express //
import express from "express";
import clientsRoutes from "./src/routes/clients.js";
import productsRoutes from "./src/routes/products.js"
import reviewsRoutes from "/src/routes/review.js"
import employeeRoutes from "./src/routes/employees.js";
// Creo una constate = a la libreria que importe y la ejecuta
const app = express();
//Uso midle war para que
app.use(express.json())
// contante para usar expres
app.use("/api/products",productsRoutes)
app.use("/api/clients",clientsRoutes)
app.use("/api/reviews",reviewsRoutes)
app.use("/api/employee", employeeRoutes);

export default app;