const postMain = async (req, res, next) => {
  console.log("someone on main page, host: ", req.headers.location);
  console.log("someone on main page, location: ", req.headers.host);
  res.status(500).json({ message: "=)" });
};

module.exports = {
  postMain,
};
