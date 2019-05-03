import { GraphQLInputObjectType, GraphQLObjectType } from "graphql";
import {
  userFields,
  authUserFields,
  tokenIdOutputField,
  createUserFields,
  removeUserFields,
  loginFields
} from "../fields/user";

export const userType = new GraphQLObjectType({
  name: "UserType",
  fields: userFields
});

export const registerOutputType = new GraphQLObjectType({
  name: "RegistrationType",
  fields: userFields
});

export const registerInputType = new GraphQLInputObjectType({
  name: "RegistrationInputType",
  fields: createUserFields
});

export const tokenIdOutputType = new GraphQLObjectType({
  name: "AccessTokenType",
  fields: tokenIdOutputField
});

export const authInputType = new GraphQLInputObjectType({
  name: "AuthenticationInputType",
  fields: authUserFields
});

// export const authType = new GraphQLObjectType({
//   name: "AuthenticationType",
//   fields: {
//     ...tokenIdOutputField,
//     currUser: {
//       type: new GraphQLObjectType({
//         name: "currentUser",
//         fields: userFields
//       })
//     }
//   }
// });

export const authType = new GraphQLObjectType({
  name: "AuthenticationType",
  fields: {
    ...tokenIdOutputField,
    ...userFields
  }
});

export const removeUserType = new GraphQLObjectType({
  name: "RemoveUserType",
  fields: removeUserFields
});

export const updateUserInputType = new GraphQLInputObjectType({
  name: "UpdateUserInputType",
  //  do not update the unique user_id -> only change creation fields
  fields: createUserFields
});
