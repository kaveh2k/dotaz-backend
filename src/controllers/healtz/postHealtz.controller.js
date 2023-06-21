const postHealtz = async (req, res, next) => {
  res.status(200).json({ message: "all good!" });
};

module.exports = {
  postHealtz,
};
