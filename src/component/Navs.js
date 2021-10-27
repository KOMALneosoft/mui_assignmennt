import { Container } from '@mui/material'
import React, { Component } from 'react'
import { Router } from 'react-router'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { AppBar,Toolbar,IconButton,Button,Typography } from '@mui/material';
import Chanpass from '../component/Chanpass'
export class Navs extends Component {
    render() {
        return (
           <>
            
              <Box sx={{ flexGrow:1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          {/* <h2 color="inherit" >Dashboard</h2> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Dashaboard
            <Button sx={{mr:5}}  color="inherit" style={{marginLeft:"50px"}}></Button>
            Welcome :
          </Typography>
          <Router>
          <Link to="/chanpass"  sx={{ color:"white"}}>Change Password</Link>
          {/* <Link to="/chanpass" >Change Password</Link> */}
           <Link to="/login">Logout</Link>
           </Router>
          {/* <Button color="inherit"style={{marginRight:"10px"}}>Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
   
              
           </>
        )
    }
}

export default Navs

