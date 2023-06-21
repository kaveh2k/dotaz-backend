const { gql, GraphQLClient } = require("graphql-request");
const getMatchData = async (matchId) => {
  const GRAPHQL_API_URL = "https://api.stratz.com/graphql";

  const graphQLClient = new GraphQLClient(GRAPHQL_API_URL, {
    headers: {
      Authorization: `bearer ${process.env.TOKEN}`,
    },
  });

  const query = gql`
    query MatchData($id: Long!) {
      match(id: $id) {
        id
        didRadiantWin
        durationSeconds
        direKills
        radiantKills
        pickBans {
          playerIndex
          heroId
          order
          bannedHeroId
          isRadiant
          playerIndex
          wasBannedSuccessfully
        }
      }
    }
  `;

  const variables = {
    id: Number(matchId),
  };

  try {
    const data = await graphQLClient.request(query, variables);
    const error = false;
    const response = { data, error };
    return response;
  } catch (err) {
    const data = err;
    const error = true;
    const response = { data, error };
    return response;
  }
};

module.exports = {
  getMatchData,
};
