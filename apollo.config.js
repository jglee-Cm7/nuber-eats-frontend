module.exports = {
  client: {
    includes: ["./src/**/*.tsx"],
    tagName: "gql",
    service: {
      name: "nuber-eats-backend",
      url: "https://assignment-sandbox.herokuapp.com/graphql"
    }
  },
};