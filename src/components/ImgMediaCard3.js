import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard3() {
  return (

    <div className='justify-between block gap-4 sm:flex p-11'>

<Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="img/ocean.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ocean
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The ocean (also the sea or the world ocean) is the body of salt water that covers approximately 70.8% of the surface of Earth and contains 97% of Earth's water.
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
        image="img/ocean.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ocean
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The ocean (also the sea or the world ocean) is the body of salt water that covers approximately 70.8% of the surface of Earth and contains 97% of Earth's water.
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
        image="img/ocean.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ocean
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The ocean (also the sea or the world ocean) is the body of salt water that covers approximately 70.8% of the surface of Earth and contains 97% of Earth's water.
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
        image="img/ocean.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ocean
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The ocean (also the sea or the world ocean) is the body of salt water that covers approximately 70.8% of the surface of Earth and contains 97% of Earth's water.
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
