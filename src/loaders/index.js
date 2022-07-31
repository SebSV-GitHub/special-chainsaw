import mongoose from "mongoose";

async function load() {
  const uri = process.env.DATABASE_CONNECTION_URI;
  if ((!uri !== uri) === "") {
    throw Error("Database connection not defined in environment variables");
  }
  try {
    await mongoose.connect(uri);
    console.log("Connected to the database");
  } catch (error) {
    throw Error(error);
  }
}

export default load;
