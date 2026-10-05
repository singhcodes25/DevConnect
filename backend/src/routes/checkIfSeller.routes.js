const express = require("express");
const {checkIfSeller} = require("../controllers/checkIfSeller.controller");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

router.get("/:userId",authMiddleware, checkIfSeller);

module.exports = router;