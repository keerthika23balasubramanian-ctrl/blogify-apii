const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts.controller');

router.get('/', postController.getAllPosts);

// dynamic route
router.get('/:postId', postController.getPostById);

module.exports = router;