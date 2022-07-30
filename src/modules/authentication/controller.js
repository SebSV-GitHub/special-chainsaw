import { getUserByUsername } from "./authentication.dao";
import { verify } from "../../utils/password";
import { sign } from "../../utils/jwt";

async function authenticate(credentials) {
  const { username, password } = credentials;
  const user = await getUserByUsername(username);
  if (!user) {
    throw Error("Invalid Credential");
  }
  if (await verify(user.password, password)) {
    return sign({ username: user.username });
  }

  throw Error("Invalid Credential");
}

export { authenticate };
