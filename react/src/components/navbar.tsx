
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, ThemeProvider, createTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StadiumIcon from '@mui/icons-material/Stadium';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MapIcon from '@mui/icons-material/Map';


export default function Navbar() {

  const appBarTheme = createTheme({
    palette: {
      primary: {
        main: '#002884',
      },
    },
  });

  return (
    <nav>
      <ThemeProvider theme={appBarTheme}>
          <AppBar>
            <Container>
              <Toolbar>
                <Typography sx={{ flexGrow: 1 }}>Magnus Sulcus</Typography>
                <Button component={Link} to="/" color="inherit">Home<HomeIcon /></Button>
                <Button component={Link} to="/venues" color="inherit">Venues<StadiumIcon /></Button>
                <Button component={Link} to="/cities" color="inherit">Cities<LocationCityIcon /></Button>
                <Button component={Link} to="/maps" color="inherit">Maps<MapIcon /></Button>
              </Toolbar>
            </Container>
          </AppBar>
      </ThemeProvider>
    </nav>
  );
};