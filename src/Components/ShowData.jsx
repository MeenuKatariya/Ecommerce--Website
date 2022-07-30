import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
export default function ShowData({id,title,color,description,price ,imageBase}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${imageBase}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} 
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {color} 

        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/product/${id}`}>
        
        <Button size="small">Check</Button>  
              </Link>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
