const jwt = require("jsonwebtoken");
// TODO: fix
const getReturn = async (req, res, next) => {
  //Generate JWT token
  console.log("we are on JWT side", req);
  const token = jwt.sign(
    {
      user: {
        id: req.user._id,
        displayName: req.user.displayName,
        avatar: req.user.avatar,
        profileUrl: req.user.profileUrl,
      },
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  // Redirect to the frontend with the JWT token as a query parameter
  res.redirect(`${process.env.REDIRECT_URL}?token=${token}`);
};

module.exports = {
  getReturn,
};
