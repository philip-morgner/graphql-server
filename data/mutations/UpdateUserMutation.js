import {
  GraphQLString,
  // GraphQLID,
  GraphQLNonNull
} from "graphql";
import { fetch } from "../../utils/fetch";
import { userType, updateUserInputType } from "../types/user";
import { omit } from "ramda";

export default {
  type: userType,
  args: {
    userId: { type: new GraphQLNonNull(GraphQLString) },
    updateUser: { type: updateUserInputType },
    confirmPassword: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: async (obj, args, context, info) => {
    const url = `http://localhost:4000/api/users/${args.userId}`;
    const payload = omit(["userId"], args);
    const updatedUser = await fetch(
      "POST",
      url,
      context.access_token,
      payload
    ).catch(console.log);

    return updatedUser;
  }
};
