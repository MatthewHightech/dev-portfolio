import React from 'react';
import { Typography, Box, Item, Stack, Chip } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import { GitHub } from '@mui/icons-material';

import { ProjectProps } from '../root/App'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const stackStyle = {
  margin: 3,
}

function ProjectModal(props: ProjectProps) {

  const items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]

  function Item() {
    return (
        <img src="https://picsum.photos/800/300/?random" alt="random" />
    )
  }

  const techSkills = items.map((data,id)=>{
    return (
      <Chip icon={<GitHub />} label="With Icon" variant="outlined" />
    )
  })

  const leadSkills = items.map((data,id)=>{
    return (
      <Chip icon={<GitHub />} label="With Icon" variant="outlined" />
    )
  })

  return (
    <Box sx={style}>

      <Carousel
      fullHeightHover={true} 
      >
          {
              items.map( (item, i) => <Item key={i} /> )
          }
      </Carousel>

      <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
      </Typography>

      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>

      <Stack sx={stackStyle} direction="row" spacing={4} justifyContent="left">
        <Typography variant="h6" component="h6">
            Technical Skills:
        </Typography>
        {techSkills}
      </Stack>

      <Stack sx={stackStyle} direction="row" spacing={4} justifyContent="left">
        <Typography variant="h6" component="h6">
            Leadership Skills:
        </Typography>
        {leadSkills}
      </Stack>

    </Box>
  );
}

export default ProjectModal;