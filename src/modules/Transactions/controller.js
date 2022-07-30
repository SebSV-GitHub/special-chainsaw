import { getAllTransactions } from "./transactions.dao";

function getTransactions() {
  return getAllTransactions();
}

export { getTransactions };
