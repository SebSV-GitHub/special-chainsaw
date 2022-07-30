import User from "../../models/User";

function getUserByUsername(username) {
  return User.findOne({ username });
}

export { getUserByUsername };
