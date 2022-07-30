import { createUser } from "./user.dao";
import { hash } from "../../utils/password";

async function postUser(user) {
  const { username, password } = user;
  const hashedPassword = await hash(password);
  return createUser({ username, password: hashedPassword });
}

export { postUser };
