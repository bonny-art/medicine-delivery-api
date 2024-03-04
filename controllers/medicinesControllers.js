import {
  MedixDB,
  PharmyDB,
  PillarDB,
  EzyRxDB,
  Drugs24DB,
} from "../models/medicineModel.js";
import HttpError from "../helpers/HttpError.js";

async function getMedicines(req, res, next) {
  const { shop } = req.params;

  var medicines = null;
  try {
    switch (shop) {
      case "medix":
        medicines = await MedixDB.find();
        break;

      case "ezyrx":
        medicines = await EzyRxDB.find();
        break;

      case "pharmy":
        medicines = await PharmyDB.find();
        break;

      case "pillar":
        medicines = await PillarDB.find();
        break;

      case "drugs24":
        medicines = await Drugs24DB.find();
        break;

      default:
        throw HttpError(404, "Shop is not found");
        break;
    }

    res.send(medicines);
  } catch (error) {
    next(error);
  }
}

async function getMedicine(req, res, next) {
  const { id, shop } = req.params;

  var medicine = null;
  try {
    switch (shop) {
      case "medix":
        medicine = await MedixDB.findById(id);
        break;

      case "ezyrx":
        medicine = await EzyRxDB.findById(id);
        break;

      case "pharmy":
        medicine = await PharmyDB.findById(id);
        break;

      case "pillar":
        medicine = await PillarDB.findById(id);
        break;

      case "drugs24":
        medicine = await Drugs24DB.findById(id);
        break;

      default:
        throw HttpError(404, "Shop is not found");
        break;
    }

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

  console.log("updateMedicineStatus");

  const update = req.body;

  const { id, shop } = req.params;

  var newMedicine = null;
  try {
    switch (shop) {
      case "medix":
        newMedicine = await MedixDB.findByIdAndUpdate(id, update, {
          new: true,
        });
        break;

      case "ezyrx":
        newMedicine = await EzyRxDB.findByIdAndUpdate(id, update, {
          new: true,
        });
        break;

      case "pharmy":
        newMedicine = await PharmyDB.findByIdAndUpdate(id, update, {
          new: true,
        });
        break;

      case "pillar":
        newMedicine = await PillarDB.findByIdAndUpdate(id, update, {
          new: true,
        });
        break;

      case "drugs24":
        newMedicine = await Drugs24DB.findByIdAndUpdate(id, update, {
          new: true,
        });
        break;

      default:
        throw HttpError(404, "Shop is not found");
        break;
    }

    if (newMedicine === null) {
      throw HttpError(404, "Medicine is not found");
    }

    res.send(newMedicine);
  } catch (error) {
    next(error);
  }
}

export default { getMedicines, getMedicine, updateMedicineStatus };
