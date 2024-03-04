import Shop from "../models/shopModel.js";
import HttpError from "../helpers/HttpError.js";

async function getShops(req, res, next) {
  try {
    const medicines = await Shop.find();

    res.send(medicines);
  } catch (error) {
    next(error);
  }
}

async function getShop(req, res, next) {
  const { shopID } = req.params;

  try {
    const medicine = await Shop.findById(shopID);
    if (medicine === null) {
      throw HttpError(404, "Shop is not found");
    }

    res.send(medicine);
  } catch (error) {
    next(error);
  }
}

export default { getShops, getShop };
