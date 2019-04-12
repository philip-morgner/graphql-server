import { GraphQLObjectType, GraphQLSchema } from "graphql";

// Queries
import UserQuery from "./queries/UserQuery";
import UserListQuery from "./queries/UserListQuery";
import MessageQuery from "./queries/MessageQuery";
import MessageListQuery from "./queries/MessageListQuery";
// Mutations
import RegistrationMutation from "./mutations/RegistrationMutation";
import AuthenticationMutation from "./mutations/AuthenticationMutation";
import UpdateUserMutation from "./mutations/UpdateUserMutation";
import RemoveUserMutation from "./mutations/RemoveUserMutation";
import AddMessageMutation from "./mutations/AddMessageMutation";
import RemoveMessageMutation from "./mutations/RemoveMessageMutation";

const MutationSchema = new GraphQLObjectType({
  name: "MutationSchema",
  fields: {
    registerUser: RegistrationMutation,
    currUser: AuthenticationMutation,
    updateUser: UpdateUserMutation,
    removeUser: RemoveUserMutation,
    addMessage: AddMessageMutation,
    removeMessage: RemoveMessageMutation
  }
});

const QuerySchema = new GraphQLObjectType({
  name: "QuerySchema",
  fields: {
    userList: UserListQuery,
    user: UserQuery,
    messageList: MessageListQuery,
    message: MessageQuery
  }
});

export default new GraphQLSchema({
  query: QuerySchema,
  mutation: MutationSchema
});
