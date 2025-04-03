import express from "express";
import {
	createProperty,
	deleteProperty,
	getAllProperty,
	getFeaturedProperty,
	getPropertyByCategory,
	getRecommendedProperty,
	toggleFeaturedProperty,
} from "../controllers/property.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProperty);
router.get("/featured", getFeaturedProperty);
router.get("/category/:category", getPropertyByCategory);
router.get("/recommendations", getRecommendedProperty);
router.post("/", protectRoute, adminRoute, createProperty);
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProperty);
router.delete("/:id", protectRoute, adminRoute, deleteProperty);	//we use here :id so in future reference we use req.params.id

export default router;
