const PostMessage = require('../models/postMessage');

const getPosts = (req, res) => {
  res.send('A Post');
};

const createPosts = (req, res) => {
  res.send('Post Created');
};

module.exports = {
  getPosts,
  createPosts,
};
