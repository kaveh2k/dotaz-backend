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
          const userFound = user;
          return done(null, userFound);
        }
      } catch (error) {
        // error in findig user
        return done(error);
      }
    }
  )
);

passport.serializeUser(async (user, done) => {
  // Serialized
  if (!user[0]) {
    // user.id in serialized, user.id
    done(null, user.id);
  } else if (user[0].id) {
    // user[0].id in serialized, user[0].id
    done(null, user[0].id);
  }
});

passport.deserializeUser(async (id, done) => {
  console.log("Deserialized");
  console.log("id in Deserialized", id);
  try {
    // Retrieve the user from the database based on their ID
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
