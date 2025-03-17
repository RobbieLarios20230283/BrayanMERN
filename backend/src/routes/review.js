import express from "express";
import reviewsController from "../Controllers/reviewsController";

const router = express.Router();

router.route("/")

.get(reviewsController.getReviews)
.post(reviewsController.inserReview)

router.route("/:id")
.put(reviewsController.updateProduct)
.delete(reviewsController.deletereview)

export default router