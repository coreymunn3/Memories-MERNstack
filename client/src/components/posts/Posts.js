import React, { Fragment } from 'react';
import Post from './post/Post';
// global state
import { useSelector } from 'react-redux';
// styles
import useStyles from './styles';

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.postsReducer);

  console.log(posts);
  return (
    <Fragment>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </Fragment>
  );
};

export default Posts;
