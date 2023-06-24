const passport = require("passport");
const { User } = require("./database");
const SteamStrategy = require("passport-steam").Strategy;

// Passport.js configuration
passport.use(
  new SteamStrategy(
    {
      returnURL: process.env.RETURN_URL,
      realm: process.env.REALM,
      apiKey: process.env.STEAM_API_KEY,
    },
    async (identifier, profile, done) => {
      try {
        const user = await User.find({ steamId: profile.id });
        if (
          user === null ||
          user === undefined ||
          !user ||
          user[0] === undefined
        ) {
          // saving new user
          const newUser = new User({
            steamId: profile.id,
            displayName: profile.displayName,
            avatar: profile._json.avatarfull,
            profileUrl: profile._json.profileurl,
          });

          await newUser
            .save()
            .then((res) => {
              // new user saved
              return done(null, res);
            })
            .catch((err) => {
              // new user saving error
              return done(err);
            });
        } else {
          // user found
          return done(null, user);
        }
      } catch (error) {
        // error in findig user
        return done(error);
      }
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});
module.exports = passport;
