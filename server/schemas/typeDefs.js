const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    books: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Book {
    bookId: ID!
    title: String!
    author: [String]
    description: String
    images: String
    link: String
  }
  type bookInput {
    bookId: String!
    title: String!
    author: [String]
    description: String
    images: String
    link: String
  }

  type Query {
    user: [User]!
    user(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addBook(book: bookInput!): User

    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
