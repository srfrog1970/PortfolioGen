const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  //
  // Find the Developer by github login ID.

  findDeveloper: function (req, res) {
    db.Developer.findOne({ loginName: req.params.id })
      .populate("repositories")
      .exec((err, dbDeveloper) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(dbDeveloper);
        }
      });
  },

  // Update the Developer
  updateDeveloper: function (req, res) {
    db.Developer.updateOne(
      { loginName: req.params.id },
      {
        $set: req.body,
      }
    ).exec((err, dbDeveloper) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(dbDeveloper);
      }
    });
  },
};
