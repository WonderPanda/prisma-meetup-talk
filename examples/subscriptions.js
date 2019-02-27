import gql from "graphql-tag";

const allMessages = gql`
  subscription allMessages {
    message {
      node {
        author {
          handle
        }
        content
      }
    }
  }
`;

const channelMessages = gql`
  subscription channelMessages {
    message(where: { node: { channel: { name: "Channel2" } } }) {
      node {
        author {
          handle
        }
        content
      }
    }
  }
`;
