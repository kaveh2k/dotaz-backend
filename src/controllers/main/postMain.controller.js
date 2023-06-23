const postMain = async (req, res, next) => {
  res.status(500).json({ message: "=)" });
};

module.exports = {
  postMain,
};
