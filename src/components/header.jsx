import React from 'react';
import { Paper, Stack, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

import '../styles/App.css';

function Header() {

  return (
    <Paper square={true} elevation={2}>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Typography variant="h2" component="h2">
            Hi I'm Matthew!
        </Typography>
      </Stack>

      <Stack direction="row" spacing={4} justifyContent="center">
        <Typography variant="h6" component="h5">
            Below you can find some projects I've worked on
        </Typography>
      </Stack>

      <Stack direction="row" spacing={3} justifyContent="center">

        <IconButton color="primary" aria-label="LinkedIn" href='https://www.linkedin.com/in/matthew-smith-softdev/' target="_blank">
          <LinkedIn />
        </IconButton>


        <IconButton color="primary" aria-label="GitHub" href='https://github.com/MatthewHightech' target="_blank">
          <GitHub />
        </IconButton>

      </Stack>
    </Paper>
  );
}

export default Header;

