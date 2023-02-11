import React from 'react';
import { Typography, Box, Stack, Chip } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import { GitHub } from '@mui/icons-material';

import { ProjectProps } from './project'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const stackStyle = {
  mt: 3,
  mb: 3,
}

function ProjectModal(props: ProjectProps) {

  const techSkills = props.parentData.techSkills.map((item)=>{
    return (
      <Chip label={item} variant="outlined" />
    )
  })

  const leadSkills = props.parentData.leadSkills.map((item)=>{
    return (
      <Chip label={item} variant="outlined" />
    )
  })

  return (
    <Box sx={style}>
        <Carousel height="400px">
            {
              props.parentData.imageURLs?.map( (url) => <img src={`/images/${url}`} alt={url} width="100%"/>)   
            }
        </Carousel>
      <Typography id="modal-modal-title" variant="h6" component="h2">
      {props.parentData.name}
      </Typography>

      <Typography id="modal-modal-subtitle" sx={{ mt: 2 }}>
      {props.parentData.role}
      </Typography>

      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {props.parentData.desc}
      </Typography>

      <Stack sx={stackStyle} direction="row" spacing={2} justifyContent="left">
        <Typography variant="h6" component="h6">
            Technical Skills:
        </Typography>
        {techSkills}
      </Stack>

      <Stack sx={stackStyle} direction="row" spacing={2} justifyContent="left">
        <Typography variant="h6" component="h6">
            Leadership Skills:
        </Typography>
        {leadSkills}
      </Stack>

    </Box>
  );
}

export default ProjectModal;