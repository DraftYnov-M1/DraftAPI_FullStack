const express = require('express');
const router = express.Router();
const articleRouter = require('./article.route');
const authRouter = require('./auth.route');
// on définit la route pour récupérer tous les articles avec le controller
router.use('/articles', articleRouter);
router.use('/auth',  authRouter);

module.exports = router;