import { GraphQLString } from "graphql";
import { fetch } from "../../utils/fetch";
import { messageType } from "../types/message";

export default {
  type: messageType,
  args: {
    messageId: { type: GraphQLString }
  },
  resolve: async (obj, params, context, info) => {
    const url = `http://localhost:4000/api/messages/${params.messageId}`;

    const message = await fetch("GET", url, context.access_token).catch(
      console.log
    );

    return message || {};
  }
};
