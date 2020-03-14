var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/donors", function(req, res) {
    db.Donor.findAll({}).then(function(dbDonors) {
      res.json(dbDonors);
    });
  });

  app.post("/api/donor", function(req, res) {
    console.log("REQ BODY COMIN");
    console.log(req.body.ownerName);
    db.Donor.create({
      name: req.body.ownerName,
      businessName: req.body.businessName,
      businessAddress: req.body.businessAddress,
      summary: req.body.summary
    })
      .then(err => {
        res.status(200).json(err);
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/api/donees", function(req, res) {});

  app.post("/api/donee", function(req, res) {
    db.Donee.create({
      name: req.body.ownerName,
      charityName: req.body.charityName,
      charityAddress: req.body.charityAddress
    })
      .then(err => {
        res.status(200).json(err);
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });
};
