const mainRedirect = async (req, res, next) => {
  console.log("someone on main page, host: ", req.headers.location);
  console.log("someone on main page, location: ", req.headers.host);
  res.redirect("https://api.stratz.com/graphiql/");
};

module.exports = {
  mainRedirect,
};
