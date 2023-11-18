const express = require('express');
const router = express.Router();

const {loginUser, registerUser, logoutUser, verifyEmail} = require("../controllers/authController")

router.post("/login", loginUser)
router.post("/register", registerUser)
router.get("/logout", logoutUser)
router.get("/verify-email", verifyEmail)
module.exports = router;