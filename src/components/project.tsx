import React from 'react';
import { Card, Grid, Paper, Button, Modal } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ProjectModal from './modal';

interface ItemProps {
  item: {
    name: string,
    description: string
  }
}

function Project() {

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={11} md={4}>
      <Card>
        <Carousel
        fullHeightHover={true} 
        >
            {
                items.map( (item, i) => <Item key={i} /> )
            }
        </Carousel>
        <h1>Project 1</h1>
        <Button onClick={handleOpen}  variant="contained" color="primary">Learn More</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ProjectModal />
          </Modal>
      </Card>
    </Grid>
  );
}

export default Project;

