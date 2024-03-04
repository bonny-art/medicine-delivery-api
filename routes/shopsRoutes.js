import express from "express";

import ShopsController from "../controllers/shopsControllers.js";

const router = express.Router();

router.get("/", ShopsController.getShops);

router.get("/:shopID/", ShopsController.getShop);

export default router;
