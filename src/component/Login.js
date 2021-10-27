import React, { Component } from 'react';
import UserDetails from '../UserDetails.json';

import FormControl from '@mui/material/FormControl';
import FormControlLabel  from '@mui/material/FormControlLabel';
import  Checkbox  from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForPass=RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
           dataVal:{ 
               email:null,
               password:null,              
            },
           errors:{
                email:'',
                password:'',
            },
            formData:[]
        }
    }

    handler=(event)=>{
        const{name,value}=event.target;
        let errors=this.state.errors;
        let fetchVal = this.state.dataVal;
        console.log(fetchVal)
        switch(name){        
            case 'email':
                errors.email=regForEmail.test(value)? '':'Email is not valid';
                fetchVal.email = value;
                break; 
            case 'password':
                errors.password=regForPass.test(value)? '':'password should be in aplhanumeric & special chars';
                fetchVal.password = value;
                // this.state.password=value;
                break;
            default:
                break;
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
        }

        formSubmit=(event)=>{
            event.preventDefault();
            let items = this.state.dataVal;
            console.log(items.email)
           
           if(this.validate(this.state.errors))
            {
                for(var i=0;i<UserDetails.length;i++) {
                    if(UserDetails[i].email === items.email && UserDetails[i].password=== items.password) {
                      alert("Registration Succesfull");
                       this.setState({
                       formData : [...this.state.formData,
                        {
                        "email":items.email,
                        "password":items.password,
                      }]
                    });   
                    localStorage.setItem("email", JSON.stringify(items.email));
                    break;
                    }
                    else if(i===UserDetails.length-1){
                        alert("Users information are incorrect");
                    }
                }
                  console.log(this.state)
                    document.getElementById('email').value='';
                     document.getElementById('password').value='';
                     console.log(this.state)
                }            
                else {
                   alert("Invalid Form");
                    document.getElementById('email').value='';
                     document.getElementById('password').value='';
                  
                }
            }
          validate=(errors)=>{
             let valid=true;
             Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
             return valid;
         }

         
    render() {
        const {errors}=this.state;
       
        return (
            <>
           <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}} >
                               

                               <FormControl className="mb-3" >
                                   <Input type="email" placeholder="Enter Email" name="email" id="email"
                                   onChange={this.handler} required/><br/>
                                   {errors.email.length>0 && 
                                   <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.email}</FormHelperText>}
                               </FormControl><br/>

                               <FormControl className="mb-3" >
                                   <Input type="password" placeholder="Enter Password" name="password" id="password" 
                                   onChange={this.handler} required /><br/>
                                   {errors.password.length>0 && 
                                   <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.password}</FormHelperText>}
                               </FormControl><br/>

                               <FormControl>
                                   <FormControlLabel control={<Checkbox  />} label="Remember Me" />
                               </FormControl><br/>

                               <Button variant="contained" href="#" type="submit" background="primary.main" onClick={this.formSubmit}> Login</Button>
                           </Box>
            </>




        )

            
        }   
  
    }
export default Login;
