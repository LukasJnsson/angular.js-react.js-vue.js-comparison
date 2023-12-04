
import React from 'react';
import { Container, Typography, ThemeProvider, createTheme } from '@mui/material';


export default function Footer() {

  const footerTheme = createTheme({
    palette: {
      primary: {
        main: '#002884',
      },
    },
  });
  
  const footerStyles: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#002884',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center'
  };

  return (
    <footer style={footerStyles}>
      <ThemeProvider theme={footerTheme}>
          <Container>
            <Typography>Lukas Jönsson - Marcus Lennartsson</Typography>
            <Typography>© All rights reserved - Ius Reservari</Typography>
            <Typography>{new Date().getFullYear()}</Typography>
          </Container>
      </ThemeProvider>
    </footer>
  );
};