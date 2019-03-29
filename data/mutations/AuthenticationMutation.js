import { fetch } from "../../utils/fetch";
import { authInputType, authType } from "../types/user";

// TODO rework
export default {
  type: authType,
  args: {
    authUser: { type: authInputType }
  },
  resolve: async (obj, params, context, info) => {
    const LOGIN_URL = "http://localhost:4000/api/users/login";
    const currUser = await fetch(
      "POST",
      LOGIN_URL,
      null,
      params.authUser
    ).catch(console.log);
    if (!currUser) {
      return {};
    }
    if (currUser.hasAvatar) {
      currUser.avatar = `http://localhost:4000/api/users/${
        currUser.user_id
      }/avatar`;
    }

    console.log(currUser);
    return currUser;
  }
};
