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

const updateServer = gql`
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
