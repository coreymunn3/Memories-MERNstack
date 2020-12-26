import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './post/Post';
// global state
import { useSelector } from 'react-redux';
// styles
import useStyles from './styles';

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.postsReducer);

  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.container} container alignItems='stretch'>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
