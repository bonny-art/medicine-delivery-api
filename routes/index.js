import express from "express";

import medicinesRoutes from "./medicinesRoutes.js";
import ordersRoutes from "./ordersRoutes.js";

const router = express.Router();

router.use("/medicines", medicinesRoutes);
router.use("/orders", ordersRoutes);

export default router;
