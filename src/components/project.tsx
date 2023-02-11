import React from 'react';
import { Card, Grid, Typography, Button, Modal } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ProjectModal from './modal';

import { ProjectData } from '../root/App'



export interface ProjectProps {
  parentData: ProjectData
}

const btnStyle = {
  margin: 3,
}

function Project(props: ProjectProps) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={11} md={4}>
      <Card>
        <Carousel autoPlay={false} height="300px">
            {
              props.parentData.imageURLs?.map( (url) => <img src={`/images/${url}`} alt={url} width="100%"/>)   
            }
        </Carousel>
        <Typography variant="h5" component="h5">
            {props.parentData.name}
        </Typography>

        <Typography variant="subtitle1" component="h5">
            {props.parentData.role}
        </Typography>


        <Button onClick={handleOpen} variant="contained" color="primary" sx={btnStyle}>Learn More</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ProjectModal parentData={props.parentData}/>
          </Modal>
      </Card>
    </Grid>
  );
}

export default Project;

