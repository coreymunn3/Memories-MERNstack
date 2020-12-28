import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './post/Post';
// global state
import { useSelector } from 'react-redux';
// styles
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.postsReducer);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.container} container alignItems='stretch'>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
