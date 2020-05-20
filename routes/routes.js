const path = require("path");
const router = require("express").Router();

// Initialize API routes.
const apiRoutes = require("./api/api");
const utilRoutes = require("./util/util");

// Call API routes.
router.use("/api", apiRoutes);

// Call utils routes.
router.use("/util", utilRoutes);

// If no API routes are hit, send the React app (landing page)
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/public/index.html"))
);

module.exports = router;
