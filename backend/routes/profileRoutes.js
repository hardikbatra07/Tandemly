const express = require('express');
const router = express.Router();
const { createOrUpdateProfile, getProfile } = require('../Controllers/profileController');
const requireAuth = require('../middleware/authMiddleware');

router.use(requireAuth); // Protect all routes

router.get('/', getProfile);         // GET profile for logged-in user
router.post('/', createOrUpdateProfile); // POST or PUT profile

module.exports = router;
