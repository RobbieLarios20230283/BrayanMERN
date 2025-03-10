//en este archivo dentro de la carpeta de routes, vamos a colocar la dirección de api products
import express from "express";
import productsController from "../Controllers/productsController.js";
const router = express.Router();

//Sabe automaticamente que me esta conetando a api products
router.route("/")
.get(productsController.getProducts)
.post(productsController.insertProducts);

router.route("/:id")
.put(productsController.updateProduct)
.delete(productsController.deleteProduct);

export default router;