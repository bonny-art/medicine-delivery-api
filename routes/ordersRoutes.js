import express from "express";

import OrdersController from "../controllers/ordersControllers.js";

const router = express.Router();
const jsonParser = express.json();

router.get("/", OrdersController.getOrders);

router.get("/:id", OrdersController.getOrder);

router.post("/", jsonParser, OrdersController.createOrder);

export default router;
