import { Schema, model } from "mongoose";

const shopSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    database: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default model("shop", shopSchema);
