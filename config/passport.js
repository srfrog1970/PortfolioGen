var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a Developer/loginName and password
passport.use(
  new LocalStrategy(
    {
      usernameField: "loginName",
    },
    function (loginName, password, done) {
      // When a company tries to sign in this code runs.
      db.Developer.findOne({
        where: {
          loginName: loginName,
        },
      }).then(function (developerData) {
        // If there's no Developer with the given loginName
        if (!developerData) {
          return done(null, false, {
            message: "Incorrect Login Name.",
          });
        }
        // If there is a Developer with the given loginName, but the password the Developer gives us is incorrect
        else if (!developerData.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password.",
          });
        }
        // If none of the above, return the company object.
        return done(null, dbCompany);
      });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the company
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (company, cb) {
  cb(null, company);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
