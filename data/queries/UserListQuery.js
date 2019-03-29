import { GraphQLList } from "graphql";
import { fetch } from "../../utils/fetch";
import { userType } from "../types/user";

export default {
  type: new GraphQLList(userType),
  resolve: async (obj, params, context) => {
    const url = "http://localhost:4000/api/users";

    const userList = await fetch("GET", url, context.access_token).catch(
      console.log
    );

    return userList || [];
  }
};
