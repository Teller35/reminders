const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    reminders: [Reminder]
  }

  type Reminder {
    _id: ID
    date: String
    username: String
    textBody: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    addReminder(date: String! textBody: String!): Reminder

    updateUser(username: String, email: String): User

    deleteReminder(reminderId: String): Reminder

    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
