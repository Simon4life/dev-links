const express = require("express");
const router = express.Router();
const authorizeUser = require("../middleware/authorizeUser")
const {updateUserProfile, getUserProfile} = require("../controllers/profileController")

router.post("/", authorizeUser, updateUserProfile);
router.get("/", authorizeUser);
router.get("/:userId", getUserProfile);

module.exports = router;