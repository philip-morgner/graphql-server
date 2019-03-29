import {
  GraphQLString,
  // GraphQLID,
  GraphQLNonNull
} from "graphql";
import { fetch } from "../../utils/fetch";
import { removeUserType } from "../types/user";

export default {
  type: removeUserType,
  args: {
    userId: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: async (obj, params, context, info) => {
    const url = `http://localhost:4000/api/users/${params.userId}`;

    const deletedUser = await fetch("DELETE", url, context.access_token).catch(
      console.log
    );

    return deletedUser;
  }
};
