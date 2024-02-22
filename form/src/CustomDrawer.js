import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from '@mui/material/Link';
import DashboardIcon from '@mui/icons-material/Dashboard'
import ArticleIcon from '@mui/icons-material/Article'
import PersonIcon from '@mui/icons-material/Person'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import WorkIcon from '@mui/icons-material/Work'
import AssignmentIcon from '@mui/icons-material/Assignment'
import GroupsIcon from '@mui/icons-material/Groups'
import SettingsIcon from '@mui/icons-material/Settings'
import ContactMailIcon from '@mui/icons-material/ContactMail'

const CustomDrawer = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div style={{ width: '250px' }}>
        <List>
          <ListItem>
            <ListItemText primary="Menu" sx={{ textAlign: 'center' }} />
          </ListItem>
          <Tabs orientation="vertical" value={false}>
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
  );
};

export default CustomDrawer;
