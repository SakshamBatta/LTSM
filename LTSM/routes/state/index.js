const router = require("express").Router();

router.use("/v1", require("./v1/state-city"));

module.exports = router;
