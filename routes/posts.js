const express = require('express');
const postsRouter = express.Router();
// controllers
const { getPosts, createPosts } = require('../controllers/postsController');

postsRouter.get('/', getPosts);
postsRouter.post('/', createPosts);

module.exports = postsRouter;
