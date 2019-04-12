import {
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLObjectType
} from "graphql";

export const userFields = {
  user_id: {
    type: GraphQLID,
    resolve: obj => obj.user_id
  },
  access_token: {
    type: GraphQLString,
    resolve: obj => obj.access_token
  },
  username: {
    type: GraphQLString,
    resolve: obj => obj.username
  },
  email: {
    type: GraphQLString,
    resolve: obj => obj.email
  },
  password: {
    type: GraphQLString,
    resolve: obj => obj.password
  },
  hasAvatar: {
    type: GraphQLBoolean,
    resolve: obj => obj.hasAvatar
  },
  avatar: {
    type: GraphQLString,
    resolve: obj => obj.avatar
  }
};

export const createUserFields = {
  username: {
    type: GraphQLString
  },
  email: {
    type: GraphQLString
  },
  password: {
    type: GraphQLString
  }
};

export const tokenIdOutputField = {
  access_token: {
    type: GraphQLString,
    resolve: obj => obj.access_token
  }
};

export const authUserFields = {
  username: {
    type: GraphQLString
  },
  email: {
    type: GraphQLString
  },
  password: {
    type: GraphQLString
  }
};

export const removeUserFields = {
  user_id: {
    type: GraphQLID,
    resolve: obj => obj.user_id
  }
};
