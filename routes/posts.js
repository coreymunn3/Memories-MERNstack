const { Router } = require('express');
const express = require('express');
const postsRouter = express.Router();
// controllers
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require('../controllers/postsController');

postsRouter.get('/', getPosts);
postsRouter.post('/', createPost);
postsRouter.patch('/:id', updatePost);
postsRouter.delete('/:id', deletePost);
postsRouter.patch('/:id/likePost', likePost);

module.exports = postsRouter;
