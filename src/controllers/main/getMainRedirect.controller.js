// TODO: set auth is success

const mainRedirect = async (req, res, next) => {
  // console.log("authentic is here");
  // if (req.isAuthenticated()) {
  // User is authenticated, render the profile page
  //   res.render("profile", { user: req.user });
  // } else {
  // User is not authenticated, redirect to the login page
  //   res.redirect("https://www.google.com"); // Replace with your login route
  // }
  console.log(`someone on ${req.url} page
  ip : ${req.clientIp}
  host : ${req.headers.host}
  pageparames: ${req.params.id}`);
  res.redirect("https://api.stratz.com/graphiql/");
};

module.exports = {
  mainRedirect,
};
