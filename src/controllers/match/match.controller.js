const { getMatchData } = require("../../services/match.service");

const getMatchInfo = async (req, res, next) => {
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
