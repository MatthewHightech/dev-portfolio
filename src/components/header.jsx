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

      <Stack direction="row" spacing={3} justifyContent="center">

        <a href='https://www.linkedin.com/in/matthew-smith-softdev/' target="_blank">
        <IconButton color="primary" aria-label="LinkedIn">
          <LinkedIn />
        </IconButton>
        </a>

        <a href='https://github.com/MatthewHightech' target="_blank">
        <IconButton color="primary" aria-label="GitHub">
          <GitHub />
        </IconButton>
        </a>
      </Stack>
    </Paper>
  );
}

export default Header;

