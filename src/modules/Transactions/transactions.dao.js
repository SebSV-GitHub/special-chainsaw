import Transaction from "../../models/Transaction";

function createTransaction(transaction) {
  const instance = new Transaction(transaction);
  return instance.save();
}

function getAllTransactions() {
  return Transaction.find();
}

export { createTransaction, getAllTransactions };
