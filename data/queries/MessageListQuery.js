import { GraphQLList } from "graphql";
import { fetch } from "../../utils/fetch";
import { messageType } from "../types/message";

export default {
  type: new GraphQLList(messageType),
  resolve: async () => {
    const url = "http://localhost:4000/api/messages";

    const messageList = await fetch("GET", url, context.access_token).catch(
      console.log
    );
    console.log("messageList", messageList);

    return messageList || [];
  }
};
