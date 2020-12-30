import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// redux
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/postActions';
// components
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
// images
import memories from './images/memories.png';
// styles
import useStyles from './styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  // Theme for custom title font
  const themeCursive = createMuiTheme({
    typography: {
      fontFamily: ['Yellowtail', 'cursive'].join(','),
    },
  });

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <ThemeProvider theme={themeCursive}>
          <Typography className={classes.heading} variant='h3' align='center'>
            Memories
          </Typography>
        </ThemeProvider>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
        ></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7} md={6}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4} md={6}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
