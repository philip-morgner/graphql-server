import { GraphQLInputObjectType, GraphQLObjectType } from "graphql";
import {
  messageFields,
  createMessageFields,
  removeMessageFields
} from "../fields/message";

export const messageType = new GraphQLObjectType({
  name: "MessageType",
  fields: messageFields
});

export const addMessageOutputType = new GraphQLObjectType({
  name: "NewMessageType",
  fields: messageFields
});

export const addMessageInputType = new GraphQLInputObjectType({
  name: "NewMessageInputType",
  fields: createMessageFields
});

export const removeMessageType = new GraphQLObjectType({
  name: "RemoveMessageType",
  fields: removeMessageFields
});
