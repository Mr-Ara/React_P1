import React, { Component } from 'react';
import NavBar from './components/navbar';
import Users from './components/users'
import { Route, Routes  } from 'react-router';

import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import User from './components/user';
import Dashboard from './components/dashboard';
import axios from 'axios';
import Logout from './components/logout';

class App extends React.Component {
   
   state={
       user:null
   }
   
   componentDidMount(){
       const token = localStorage.getItem('token')
        if(!token){
            this.setState({user:null});
            return
        }

        // const response = await axios.post('https://reqres.in/api/userbytoken',{token})

        const response = {
            data:{
                user:{
                    name: 'AmiReza',
                    email:'mr.ara1999@gmail.com'
                }
            }
        }

        if(!response.data.user){
            this.setState({user:null})
            return;
        }
        this.setState({user:response.data.user})
    }
   
    render() { 
        return  <>
        <NavBar user={this.state.user} />
            <div className="container mt-3">
                
                <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/users/:id"  element={<User/>}/>
                <Route path="/users" render={(props)=>{<Users{...props}/>}} element={<Users/>}  />
              
                <Route path="/login"  element={<Login/>}/>
                <Route path="/logout"  element={<Logout/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
        
                </Routes>
            </div>
        </>;
    }
  
}
 
export default App;