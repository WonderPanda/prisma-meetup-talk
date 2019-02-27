import gql from "graphql-tag";

const createUser = gql`
  mutation createUser {
    createUser(data: { handle: "WonderPanda" }) {
      id
    }
  }
`;

const createServerWithUser = gql`
  mutation createServer {
    createServer(
      data: {
        name: "Server Of Awesomeness"
        members: { connect: [{ handle: "WonderPanda" }] }
      }
    ) {
      id
      name
    }
  }
`;

const createSomeMembers = gql`
  mutation updateServer {
    updateServer(
      data: {
        members: {
          create: [
            { handle: "User10" }
            { handle: "User11" }
            { handle: "User12" }
            { handle: "User13" }
            { handle: "User14" }
            { handle: "User15" }
            { handle: "Special User" }
          ]
        }
      }
      where: { name: "Server Of Awesomeness" }
    ) {
      members {
        handle
      }
    }
  }
`;

const createSomeChannels = gql`
  mutation {
    updateServer(
      where: { name: "Server Of Awesomeness" }
      data: {
        channels: { create: [{ name: "Channel1" }, { name: "Channel2" }] }
      }
    ) {
      name
      members {
        handle
      }
      channels {
        name
      }
    }
  }
`;

const createMessage = gql`
  mutation createMessage {
    createMessage(
      data: {
        content: "Hello, World!"
        author: { connect: { handle: "WonderPanda" } }
        channel: { connect: { name: "Channel1" } }
      }
    ) {
      id
      content
    }
  }
`;

const addFriends = gql`
  mutation updateUser {
    updateUser(
      where: { handle: "WonderPanda" }
      data: {
        friends: {
          create: [
            {
              handle: "Pookie"
              emailAddress: "christyn@someemail.com"
              name: "Christyn"
            }
          ]
        }
      }
    ) {
      friends {
        id
        name
      }
    }
  }
`;
