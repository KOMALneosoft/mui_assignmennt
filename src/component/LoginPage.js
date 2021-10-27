import { Button, Container, FormControl, FormHelperText, Input, InputLabel, Switch } from '@mui/material'
import Box from '@mui/material/Box';
import React, { Component } from 'react'
import Submit from './Submit';
import {BrowserRouter as Router,Route,Link,withRouter} from 'react-router-dom'
import ContentBar from './ContentBar';
import {Redirect} from 'react-router-dom'

const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

export class LoginPage extends Component {
    constructor(props)
    {
        super(props);
        this.state={userData:[],email:'',password:'',errors:{email1:'',password1:''}}
      
    }
    componentDidMount()
    {
        const URL="http://localhost:3001/User"
        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
            this.setState({userData:data})
        })
    }
    handler=(event)=>
    {const {name,value}=event.target;
   
    let errors=this.state.errors;
    switch(name){
      
        case 'email':
            errors.email1=regForEmail.test(value)?'':'Email is not valid';
          
            break;
    
        case 'password':
            errors.password1=value.length<8?'Password must be 8 chanrater long':'';

            break;
       
        
    }
    this.setState({errors,[name]:value})
}

addForm=(event)=>
{
    event.preventDefault();
    let arr=[];
    const {email,password}=this.state;
     
    {this.state.userData.map(pro=>{
        var mail=pro.email;
      if(email==pro.email)
      {
         if(password==pro.pass)
           {
        this.setState({logIn:true})
     
        arr.push({email,password});
        // localStorage.setItem('mycart',JSON.stringify(arr));
    //    <Redirect to="/dashboard"/>
    // this.props.history.push('/dashboard')
           }
      }
    
    })}
    // localStorage.setItem('email',email);
    // localStorage.setItem('pass',password);
    
   
}
    render() {
        const {errors}=this.state;
        const {email,password}=this.state;
        const {logIn}=this.state
       
        return (
            <>
            <Container maxWidth="sm" >
                <Box component="form"  className="mt-3" sx={{bgcolor:'azure',height:'300px'}}>
                    <br/>
                    <h2>Admin Login</h2>
                    <FormControl className="mt-3">
                        <InputLabel>Email</InputLabel>
                        <Input type="text" name="email" placeholder="Enetr Email" id="email" onChange={this.handler}/> 
                                             {errors.email1.length>0&&
                         <FormHelperText style={{color:'red'}}>{errors.email1}</FormHelperText>}
                    </FormControl>
                    <br/><br/>
                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <Input type="Password" name="password" placeholder="Enetr Password" id="pass" onChange={this.handler}></Input>
                        {errors.password1.length>0&&
                         <FormHelperText style={{color:'red'}}>{errors.password1}</FormHelperText>}
                    </FormControl>

                    <br/><br/><br/>
                    <Button  href="#"onClick={this.addForm}>Submit</Button>
                    <Router>
                  <Route path="/dashboard" component={ContentBar}/>
                  </Router>
                </Box>
                {/* <div>  {logIn?<Dashboard/>:<LoginPage/>}</div> */}
              
            </Container>
                
            </>
        )
    }
}

export default LoginPage
