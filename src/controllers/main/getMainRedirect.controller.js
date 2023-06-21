const mainRedirect = async (req, res, next) => {
  console.log(`someone on ${req.url} page 
  ip : ${req.clientIp}
  host : ${req.headers.host}
  pageparames: ${req.params.id}`);
  res.redirect("https://api.stratz.com/graphiql/");
};

module.exports = {
  mainRedirect,
};
