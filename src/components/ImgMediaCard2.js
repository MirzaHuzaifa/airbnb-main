import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard2() {
  return (

    <div className='justify-between block gap-4 sm:flex p-11'>

<Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="img/fields.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fields
        </Typography>
        <Typography variant="body2" color="text.secondary">
        an area of open land, especially one planted with crops or pasture, typically bounded by hedges or fences.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="img/fields.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fields
        </Typography>
        <Typography variant="body2" color="text.secondary">
        an area of open land, especially one planted with crops or pasture, typically bounded by hedges or fences.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="img/fields.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fields
        </Typography>
        <Typography variant="body2" color="text.secondary">
        an area of open land, especially one planted with crops or pasture, typically bounded by hedges or fences.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="img/fields.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fields
        </Typography>
        <Typography variant="body2" color="text.secondary">
        an area of open land, especially one planted with crops or pasture, typically bounded by hedges or fences.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


    </div>

  );
}
