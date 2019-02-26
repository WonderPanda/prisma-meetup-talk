import gql from "graphql-tag";

const listServers = gql`
  query getServers {
    servers {
      id
      name
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

const whatAreMyFriendsUpTo = gql`
  query whatAreMyFriendsUpTo {
    user(where: { handle: "WonderPanda" }) {
      name
      friends {
        handle
        servers(where: { public: true }) {
          name
          members {
            name
          }
        }
      }
    }
  }
`;
