import mongoose from "mongoose";

async function load() {
  try {
    await mongoose.connect("mongodb://localhost:27017/tyba");
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
  }
}

export default load;
