import { Schema, model } from "mongoose";

const TransactionSchema = new Schema({
  request: String,
  at: String,
});

const Transaction = model("Transaction", TransactionSchema);

export default Transaction;
