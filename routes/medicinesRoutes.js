import express from "express";

import MedicinesController from "../controllers/medicinesControllers.js";

const router = express.Router();
const jsonParser = express.json();

router.get("/:shop/medicines", MedicinesController.getMedicines);

router.get("/:shop/medicines/:id", MedicinesController.getMedicine);

router.patch(
  "/:shop/medicines/:id/favorite",
  jsonParser,
  MedicinesController.updateMedicineStatus
);

export default router;
