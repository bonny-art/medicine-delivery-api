import express from "express";

import medicinesRoutes from "./medicinesRoutes.js";
import ordersRoutes from "./ordersRoutes.js";
import shopsRoutes from "./shopsRoutes.js";

const router = express.Router();

router.use("/shops", shopsRoutes);
router.use("/medicines", medicinesRoutes);
router.use("/orders", ordersRoutes);

export default router;
