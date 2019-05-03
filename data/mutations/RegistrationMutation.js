import { fetch } from "../../utils/fetch";
import { registerOutputType, registerInputType } from "../types/user";

export default {
  type: registerOutputType,
  args: {
    newUser: { type: registerInputType }
  },
  resolve: async (obj, params, context, info) => {
    const url = "http://localhost:4000/api/users";

    const newUser = await fetch("POST", url, null, params.newUser).catch(
      console.log
    );

    newUser.avatar = `http://localhost:4000/api/users/${
      newUser.user_id
    }/avatar/${newUser.lastAvatarUpdate}`;

    console.log("TCL: newUser", newUser);
    return newUser;
  }
};
