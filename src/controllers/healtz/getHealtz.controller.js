const getHealtz = async (req, res, next) => {
  res.status(200).json({ message: "all good!" });
};

module.exports = {
  getHealtz,
};
