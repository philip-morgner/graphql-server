import { GraphQLString, GraphQLInt } from "graphql";
import { fetch } from "../../utils/fetch";
import { userType } from "../types/user";

export default {
  type: userType,
  args: {
    userId: { type: GraphQLString }
  },
  resolve: async (obj, params, context, info) => {
    const url = `http://localhost:4000/api/users/${params.userId}`;
    const user = await fetch("GET", url, context.access_token).catch(
      console.log
    );
    if (!user) {
      return {};
    }
    user.avatar = url + "/avatar/" + user.lastAvatarUpdate;

    return user;
  }
};
