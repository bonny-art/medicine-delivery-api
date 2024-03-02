import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      match: /[\w\s]+/,
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

export default mongoose.model("Medicine", medicineSchema);
