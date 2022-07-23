// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { Container, Toolbar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts.js';
import Posts from './components/Posts/posts.js';
import Form from './components/Form/form.js';

import memories from './images/memories.png';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="memories" height="60" />
        </Toolbar>
        <Grow in={true}>
          <Container>
            <Grid container justifyContent="center" alignItems="center" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
