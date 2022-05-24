const express = require("express");
const router = express.Router();

// import handler
const { getVersions } = require("../services/versionHandler");
// import admin
const admin = require("./admin");
const interfaces = require("./interface");
const login = require("./login");

const checkAuth = function (req, res, next) {
  if (!req.session.isLogin) {
    return res.redirect("/login");
  }
  next();
};

router.use("/admin", checkAuth,  admin);
// router.use("/interfaces", checkAuth, interfaces);
router.use("/login", login);
router.use("/", interfaces);

router.get("/version", async function (req, res, next) {
  const { query } = req;
  const version = await getVersions(query);
  res.status(200).json({
    version: version[0].version,
  });
});

module.exports = router;
