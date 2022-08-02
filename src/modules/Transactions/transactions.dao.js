import Transaction from "../../models/Transaction";

function createTransaction(transaction) {
  const instance = new Transaction(transaction);
  return instance.save();
}

function getAllTransactions(page) {
  return Transaction.find()
    .limit(10)
    .skip(10 * (page - 1));
}

export { createTransaction, getAllTransactions };
