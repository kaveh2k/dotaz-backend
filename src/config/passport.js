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
    (identifier, profile, done) => {
      const user = User.findOne({ steamId: profile.id });

      if (!user) {
        const newUser = new User({
          steamId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
          profileUrl: profile._json.profileurl,
          realName: profile._json.realname,
          countryCode: profile._json.loccountrycode,
        });

        newUser.save((err) => {
          if (err) return done(err);
          return done(null, newUser);
        });
      } else {
        return done(null, user);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
