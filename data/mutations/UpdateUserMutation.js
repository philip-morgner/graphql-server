import {
  GraphQLString,
  // GraphQLID,
  GraphQLNonNull
} from "graphql";
import { fetch } from "../../utils/fetch";
import { updateUserOutputType, updateUserInputType } from "../types/user";

export default {
  type: updateUserOutputType,
  args: {
    userId: { type: new GraphQLNonNull(GraphQLString) },
    payload: { type: updateUserInputType }
  },
  resolve: async (obj, params, context, info) => {
    const url = `http://localhost:4000/api/users/${params.userId}`;

    const updatedUser = await fetch(
      "POST",
      url,
      context.access_token,
      params.payload
    ).catch(console.log);

    return updatedUser;
  }
};
