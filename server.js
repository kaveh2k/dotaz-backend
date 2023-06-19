const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const express = require("express");
const { gql, GraphQLClient } = require("graphql-request");

const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.redirect("https://api.stratz.com/graphiql/");
});

app.get("/healtz", (req, res) => {
  res.status(200).json({ message: "all good!" });
});

app.get("*", (req, res) => {
  res.redirect("https://api.stratz.com/graphiql/");
});

app.post("/match/:id", async (req, res) => {
  if (isNaN(req.params.id)) {
    res.status(404).send(null);
  } else {
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
      id: Number(req.params.id),
    };

    try {
      const data = await graphQLClient.request(query, variables);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
});

app.post("*", (req, res) => {
  res.status(500).json({ message: "=)" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
