import { createTransaction } from "../modules/Transactions/transactions.dao";

async function logTransaction(req, res, next) {
  await createTransaction({
    path: req.originalUrl,
    ip: req.ip,
    method: req.method,
    params: req.params,
    request: {
      headers: req.headers,
      payload: req.body,
      user: req.user,
    },
    response: {
      status: res.statusCode,
    },
    at: Date.now(),
  });
  next();
}

export default logTransaction;
