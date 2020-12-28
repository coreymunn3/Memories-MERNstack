const express = require('express');
const postsRouter = express.Router();
// controllers
const {
  getPosts,
  createPost,
  updatePost,
} = require('../controllers/postsController');

postsRouter.get('/', getPosts);
postsRouter.post('/', createPost);
postsRouter.patch('/:id', updatePost);

module.exports = postsRouter;
