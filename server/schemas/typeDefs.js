const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    books: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Book {
    bookId: ID!
    title: String!
    authors: [String]
    description: String
    image: String
    link: String
  }

  type bookInput {
    bookId: String!
    title: String!
    authors: [String]
    description: String
    image: String
    link: String
  }

  type Query {
    user: [User]!
    user(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBook(books: bookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
