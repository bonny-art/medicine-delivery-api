import express from "express";

import MedicinesController from "../controllers/medicinesControllers.js";

const router = express.Router();
const jsonParser = express.json();

router.get("/", MedicinesController.getMedicines);

router.get("/:id", MedicinesController.getMedicine);

router.patch(
  "/:id/favorite",
  jsonParser,
  MedicinesController.updateMedicineStatus
);

export default router;
