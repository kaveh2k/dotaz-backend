const { getMatchData } = require("../../services/match.service");

const getMatchInfo = async (req, res, next) => {
  console.log("Received request with ID:", req.params.id);
  if (isNaN(req.params.id)) {
    res.status(404).send(null);
  } else {
    const { data, error } = await getMatchData(req.params.id);
    if (error) {
      res.status(500).json({ error: data });
    } else {
      res.json(data);
    }
  }
};

module.exports = {
  getMatchInfo,
};
