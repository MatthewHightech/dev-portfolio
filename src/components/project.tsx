import React from 'react';
import '../styles/Project.css';
import { Card, Grid, Paper, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

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

  return (
    <Grid item xs={11} md={3}>
      <Card>
        <Carousel
        fullHeightHover={true} 
        >
            {
                items.map( (item, i) => <Item key={i} /> )
            }
        </Carousel>
        <h1>Project 1</h1>
      </Card>
    </Grid>
  );
}

export default Project;

