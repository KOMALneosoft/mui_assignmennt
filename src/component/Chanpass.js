import React, { Component } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Button, FormControl, Input, InputLabel } from '@mui/material'
export class Chanpass extends Component {
    render() {
        return (
        <>
            <Box>
                <Container>
                    <h2>Change Password</h2>
                    <FormControl>
                       <InputLabel>Old Passwod</InputLabel>
                       <Input type="text"  name="opass"/>
                   </FormControl><br/><br/>
                   <FormControl>
                       <InputLabel>New Passwod</InputLabel>
                       <Input type="text"  name="opass"/>
                   </FormControl>
                   <br/><br/>
                   <FormControl>
                       <InputLabel>Confirm Passwod</InputLabel>
                       <Input type="text"  name="opass"/>
                   </FormControl>
<br/>
                   
                   <Button sx={{mt:4}} variant="outlined" >Submit</Button>
                </Container>
            </Box>
        </>
        )
    }
}

export default Chanpass
