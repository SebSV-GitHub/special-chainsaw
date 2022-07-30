import { verify } from "../utils/jwt";

function validateAuth(req, _res, next) {
  const authHeader = req.get("Authorization");
  const [prefix, token] = authHeader.split(" ");
  if (!prefix || prefix !== "Bearer") {
    throw Error("Invalid token prefix");
  }
  req.user = verify(token);
  next();
}

export default validateAuth;
