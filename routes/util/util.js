const router = require("express").Router();
const passport = require("../../config/passport");
const utilController = require("../../controllers/utilController");

// (With the github user ID), call to synch github with the local database.

router.route("/sync/:id").post(utilController.syncDatabase);

router.route("/createAccount").post(utilController.createAccount);
router.route("/signIn").post(utilController.signIn);

// router.post("/signIn", passport.authenticate("local"), function (req, res) {
//   console.log("got here");
//   res.json("req.user");
// });
//   router.route("/sync/:id").post((req, res) => {
//     console.log("Route Hitdddd");
//     utilController.syncDatabase;
//     res.send(true);
//   });

module.exports = router;
