const postMain = async (req, res, next) => {
  console.log(`someone on ${req.url} page 
  ip : ${req.clientIp}
  host : ${req.headers.host}
  pageparames: ${req.params.id}`);
  res.status(500).json({ message: "=)" });
};

module.exports = {
  postMain,
};
