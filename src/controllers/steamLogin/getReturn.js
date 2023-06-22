const jwt = require("jsonwebtoken");

const getReturn = async (req, res, next) => {
  // Generate JWT token
  const token = jwt.sign(
    {
      user: {
        id: req.user._id,
        displayName: req.user.displayName,
        email: req.user.email,
        avatar: req.user.avatar,
        profileUrl: req.user.profileUrl,
        realName: req.user.realName,
        countryCode: req.user.countryCode,
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
