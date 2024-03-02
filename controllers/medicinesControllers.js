import Medicine from "../models/medicinesModel.js";
import HttpError from "../helpers/HttpError.js";

async function getMedicines(req, res, next) {
  try {
    const medicines = await Medicine.find();

    res.send(medicines);
  } catch (error) {
    next(error);
  }
}

async function getMedicine(req, res, next) {
  const { id } = req.params;

  try {
    const medicine = await Medicine.findById(id);
    if (medicine === null) {
      throw HttpError(404, "Medicine is not found");
    }

    res.send(medicine);
  } catch (error) {
    next(error);
  }
}

async function updateMedicineStatus(req, res, next) {
  // TODO Add Joi
  const { id } = req.params;

  const update = req.body;

  try {
    const newMedicine = await Medicine.findByIdAndUpdate(id, update, {
      new: true,
    });

    if (newMedicine === null) {
      throw HttpError(404, "Medicine is not found");
    }

    res.send(newMedicine);
  } catch (error) {
    next(error);
  }
}

export default { getMedicines, getMedicine, updateMedicineStatus };
