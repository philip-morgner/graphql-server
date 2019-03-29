import {
  GraphQLString,
  // GraphQLID,
  GraphQLNonNull
} from "graphql";
import { fetch } from "../../utils/fetch";
import { removeMessageType } from "../types/message";

export default {
  type: removeMessageType,
  args: {
    messageId: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: async (obj, params, context, info) => {
    const url = `http://localhost:4000/api/messages/${params.messageId}`;

    const deletedMessage = await fetch(
      "DELETE",
      url,
      context.access_token
    ).catch(console.log);

    return deletedMessage;
  }
};
