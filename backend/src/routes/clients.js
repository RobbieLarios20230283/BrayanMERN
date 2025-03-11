
import express from "express";
import clientsController from "../Controllers/clientsController.js";

const router = express.Router();

router.route("/")
.get(clientsController.getClients)
.post(clientsController.insertClients);

router.route("/:id")
.put(clientsController.updateClient)
.delete(clientsController.deleteClient);

export default router;