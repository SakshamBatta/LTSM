const router = require("express").Router();
const { readLmsv3, getUser } = require("../../../controllers/LMS/v3/lms_controller");

router.get("/read", readLmsv3);
router.get("/get-user", getUser);

module.exports = router;
