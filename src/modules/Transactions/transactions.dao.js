import Transaction from "../../models/Transaction";

function getAllTransactions() {
  return Transaction.find();
}

export { getAllTransactions };
