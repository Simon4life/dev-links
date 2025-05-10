const express = require('express');
const router = express.Router();
const authorizeUser = require("../middleware/authorizeUser");
const { loginUser, registerUser, logoutUser, getUser } = require("../controllers/authController")

router.post("/login", loginUser)
router.post("/register", registerUser)
router.get("/logout", logoutUser)
router.get("/get-user", authorizeUser, getUser)
module.exports = router;