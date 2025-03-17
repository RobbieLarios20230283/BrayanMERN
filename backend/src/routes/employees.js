import express from "express";
import employeeController from "../Controllers/employeeControllers.js";

const router = express.Router();

router
  .route("/")
  .get(employeeController.getemployee)
  .post(employeeController.insertemployee);

router
  .route("/:id")
  .put(employeeController.updateemployee)
  .delete(employeeController.deleteemployee);

export default router;
