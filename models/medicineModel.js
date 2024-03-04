import { Schema, model } from "mongoose";

const medicineSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    ammount: {
      type: Number,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

export const MedixDB = model("medix_medicine", medicineSchema);
export const EzyRxDB = model("ezyrx_medicine", medicineSchema);
export const PharmyDB = model("pharmy_medicine", medicineSchema);
export const PillarDB = model("pillar_medicine", medicineSchema);
export const Drugs24DB = model("drugs24_medicine", medicineSchema);
