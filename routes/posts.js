const express = require('express');
const postsRouter = express.Router();
// controllers
const { getPosts, createPost } = require('../controllers/postsController');

postsRouter.get('/', getPosts);
postsRouter.post('/', createPost);

module.exports = postsRouter;
