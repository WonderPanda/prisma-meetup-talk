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

const serverDetails = gql`
  query {
    servers {
      channels {
        name
        members {
          handle
        }
      }
    }
  }
`;

const aggregateExample = gql`
  query {
    usersConnection {
      aggregate {
        count
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
