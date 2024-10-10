import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import '../Helper/Cards.css';
import ButtonComp from './ButtonComp';

const Cards = ({ title, img, desc, click, addToCart }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" className='proDesc' component="div">
          {title}
        </Typography>
        <Typography variant="body2" className='proDesc' color="text.secondary">
          {desc}
        </Typography>
        <ButtonComp btnTitle='View Details' onclick={click} />
        <ButtonComp btnTitle='Add to Cart' onclick={addToCart} />
      </CardContent>
    </Card>
  );
};


export default Cards