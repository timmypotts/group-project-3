const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
const routes = require('./routes/api-routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
app.use(routes);



db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
