import React from 'react';
import '../styles/App.css';
import { Avatar, Grid, Paper } from '@mui/material';

import Project from '../components/project';

import image from '../static/images/Me.jpg'

function App() {
  return (
    <div className="App">

      <Paper>
        <h1>Hi, I'm Matt</h1>
        <Avatar
        alt="Remy Sharp"
        src={image}
        sx={{ width: 56, height: 56 }}
        />
      </Paper>

      <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      >
        <Project />
      </Grid>
    </div>
  );
}

export default App;
