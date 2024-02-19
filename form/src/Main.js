import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



import ContactMailIcon from '@mui/icons-material/ContactMail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WorkIcon from '@mui/icons-material/Work';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';

import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DownloadIcon from '@mui/icons-material/Download';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
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
  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    window.location = '/login'
  }

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpenSidebar(!openSidebar)}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            <Button
              variant="contained"
              onClick={handleLogout}
              sx={{ borderRadius: '2rem', fontSize: '14px'}}
            >
              Logout
            </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openSidebar} onClose={() => setOpenSidebar(false)}>
          <div style={{ width: '250px' }}>
            <List>
            <ListItem >
              <ListItemText primary="Menu" sx={{ textAlign: 'center' }} />
            </ListItem>
              <Tabs
                orientation="vertical"
                value={false} 
              >
                  <Tab icon={<DashboardIcon />} label={<Link href="#" variant="body2" color="inherit">Dashboard</Link>} />
                  <Tab icon={<ArticleIcon />} label={<Link href="#" variant="body2" color="inherit">Document</Link>} />
                  <Tab icon={<PersonIcon />} label={<Link href="#" variant="body2" color="inherit">Correspondents</Link>} />
                  <Tab icon={<LocalOfferIcon />} label={<Link href="#" variant="body2" color="inherit">Tags</Link>} />
                  <Tab icon={<WorkIcon />} label={<Link href="#" variant="body2" color="inherit">Workflow</Link>} />
                  <Tab icon={<AssignmentIcon />} label={<Link href="#" variant="body2" color="inherit">Task</Link>} />
                  <Tab icon={<GroupsIcon />} label={<Link href="#" variant="body2" color="inherit">User&group</Link>} />
                  <Tab icon={<SettingsIcon />} label={<Link href="#" variant="body2" color="inherit">Setting</Link>} />
                  <Tab icon={<ContactMailIcon />} label={<Link href="#" variant="body2" color="inherit">Contact</Link>} />

              </Tabs>
            </List>
          </div>
        </Drawer>
      <main>
      
        <Box //ของ dashboard
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
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' ,borderRadius : '2rem'}}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      File Name
                    </Typography>
                    <Typography /* สร้างแยก */>
                     Details
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
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
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}