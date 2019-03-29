import { fetch } from "../../utils/fetch";
import { addMessageOutputType, addMessageInputType } from "../types/message";

export default {
  type: addMessageOutputType,
  args: {
    newMessage: { type: addMessageInputType }
  },
  resolve: async (obj, params, context, info) => {
    const url = "http://localhost:4000/api/messages";

    const newMessage = await fetch(
      "POST",
      url,
      context.access_token,
      params.newMessage
    ).catch(console.log);

    return newMessage;
  }
};
