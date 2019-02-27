import gql from "graphql-tag";

const listServers = gql`
  query getServers {
    servers {
      id
      name
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

const userLike = gql`
  query userLike {
    users(where: { handle_starts_with: "User" }) {
      handle
      id
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
