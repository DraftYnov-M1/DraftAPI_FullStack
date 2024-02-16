const express = require('express');
const router = express.Router();
const { registerUser, getMe } = require('../controllers/auth.controller');
const isAuth = require('../middlewares/isAuth');

router.post('/register', registerUser);
router.get("/me", isAuth, getMe);

module.exports = router;