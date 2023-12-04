
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import useTitle from '../hooks/useTitle';


export default function Error() {
  useTitle('Error');

  return (
  <>
    <NavBar />
      <main id='error_card' className="center-main">
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia component="img" image="https://m.media-amazon.com/images/M/MV5BMzNiNmU2ZmUtNmM4My00OTRjLWIxZTgtYzk1ZmI3ZjU2NjkwXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
              alt="Error, you have reached Dave Mustaine"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">Dave Mustaine</Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet commodo urna in iaculis. 
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac tristique ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vel ex cursus nibh vehicula iaculis. Suspendisse vel facilisis tortor. Vestibulum eu purus justo.
                    </Typography>
                </CardContent>
            </CardActionArea>
          </Card>
      </main>
    <Footer />
  </>
  );
};