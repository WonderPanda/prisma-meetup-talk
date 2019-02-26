import gql from "graphql-tag";

const createUser = gql`
  mutation createUser {
    createUser(
      data: {
        handle: "WonderPanda"
        emailAddress: "jesse.r.carter@gmail.com"
        name: "Jesse Carter"
      }
    ) {
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
    )
  }
`;
