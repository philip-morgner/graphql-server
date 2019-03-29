import { GraphQLString, GraphQLID } from "graphql";

export const messageFields = {
  message_id: {
    type: GraphQLID,
    resolve: obj => obj.message_id
  },
  message: {
    type: GraphQLString,
    resolve: obj => obj.message
  },
  timestamp: {
    type: GraphQLString,
    resolve: obj => obj.timestamp
  },
  author_id: {
    type: GraphQLString,
    resolve: obj => obj.author_id
  }
};

export const createMessageFields = {
  message: {
    type: GraphQLString
  },
  author_id: {
    type: GraphQLString
  }
};

export const removeMessageFields = {
  message_id: {
    type: GraphQLID,
    resolve: obj => obj.message_id
  }
};
