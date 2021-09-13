import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const photo = {
    height: '40vh',
    objectFit: 'contain'
}


export default function Product({ image, title, description}) {

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image={image}
          style={photo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
        <Button size="small" color="primary">
          Add to Basket
        </Button>
      </CardActions>
    </Card>
  );
}
