import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { height, style } from '@mui/system';

export default function ImgMediaCard0() {
  return (

    <div className='justify-between block gap-4 sm:flex p-11'>

<Card className='rounded-lg'>
      <CardMedia
      className='rounded-lg'
        component="img"
        alt="green iguana"
        height="140"
        image="img/gallexy.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Universe
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The universe (Latin: universus) is all of space and time and their contents, including planets, stars, galaxies, and all other forms of matter and energy.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    <Card>
      <CardMedia
      className='rounded-lg shadow-none '
        component="img"
        alt="green iguana"
        height="140"
        image="img/gallexy.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Universe
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The universe (Latin: universus) is all of space and time and their contents, including planets, stars, galaxies, and all other forms of matter and energy.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    <Card>
      <CardMedia
      className='rounded-lg shadow-none'
        component="img"
        alt="green iguana"
        height="140"
        image="img/gallexy.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Universe
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The universe (Latin: universus) is all of space and time and their contents, including planets, stars, galaxies, and all other forms of matter and energy.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    <Card className='font-sans'>
      <CardMedia
      className='rounded-lg shadow-none '
        component="img"
        alt="green iguana"
        height="140"
        image={"img/gallexy.png"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Universe
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The universe (Latin: universus) is all of space and time and their contents, including planets, stars, galaxies, and all other forms of matter and energy.
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
