import mongoose from "mongoose";

const BD_URI = process.env.BD_URI;

mongoose
  .connect(BD_URI)
  .then(() => console.log("Database connection succcessfull"))
  .catch((error) => {
    console.error("Database connection error: ", error);
    process.exit(1);
  });
