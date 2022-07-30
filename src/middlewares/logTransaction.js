import Transaction from "../models/Transaction";

async function logTransaction(req, res, next) {
  const transaction = new Transaction({
    request: req.originalUrl,
    at: Date.now(),
  });
  await transaction.save();
  next();
}

export default logTransaction;
