import React, { useState, useEffect } from 'react';
import CustomAppBar from './CustomAppBar';
import CustomDrawer from './CustomDrawer';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DownloadIcon from '@mui/icons-material/Download';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();

export default function Main() {

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3333/authen', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
      },
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
          //alert('authen success')
      } else {
          alert('login failed')
          localStorage.removeItem('token');
          window.location = '/login'
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    }); 
  },[])

  const [openSidebar, setOpenSidebar] = useState(false);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = '/login';
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <CustomAppBar onMenuClick={() => setOpenSidebar(!openSidebar)} onLogout={handleLogout} />
      <CustomDrawer open={openSidebar} onClose={() => setOpenSidebar(false)} />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Dashboard
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 3 }} maxWidth="xl">
          <Grid container spacing={4}>
            {[...Array(9)].map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '2rem' }}>
                  <CardMedia
                    component="div"
                    sx={{ pt: '56.25%' }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      File Name
                    </Typography>
                    <Typography>
                      Details
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton size="md" sx={{ mx: 4 }} aria-label="view">
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton size="md" sx={{ mx: 4 }} aria-label="edit">
                      <ModeEditIcon />
                    </IconButton>
                    <IconButton size="md" sx={{ mx: 4 }} aria-label="download">
                      <DownloadIcon />
                    </IconButton>
                  </CardActions>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
