const clientIp = (req, res, next) => {
  const clientIp =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  req.clientIp = clientIp;
  next();
};

module.exports = clientIp;
