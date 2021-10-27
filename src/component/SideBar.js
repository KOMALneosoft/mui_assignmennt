import React, { Component } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


export class SideBar extends Component {
    render() {
        return (
            <>
               <Box sx={{ width: '50%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
             
              </ListItemIcon>
              <ListItemText primary="Categary" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               
              </ListItemIcon>
              <ListItemText primary="Feedback" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               
              </ListItemIcon>
              <ListItemText primary="Product" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               
              </ListItemIcon>
              <ListItemText primary="order" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      </Box>
            </>
        )
    }
}

export default SideBar

