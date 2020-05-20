// load npm package express, primarily for the router
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const passport = require("passport");
const app = express();

app.set("view-engine", "ejs"); //TODO: Not sure if I need this.
const PORT = process.env.PORT || 3001;

// require(".config/passport");
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true })); //TODO: Video had "extended: false"
app.use(express.json());

// Serve up static assets for React
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Connect to the Mongo DB (portfolio_db)
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolio_db",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Start the API server on port 3001
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
