const express = require('express')
const sellerController = require('../controllers/seller.controller')
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");


router.post('/apply', authMiddleware, sellerController.applyToBeSeller);
router.get('/explore', sellerController.applyToBeSeller);




module.exports = router;