import React, { Component } from 'react';
import NavBar from './components/navbar';
import Users from './components/users'
import { Route, Routes  } from 'react-router';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import User from './components/user';

class App extends React.Component {
    render() { 
        return  <>
        <NavBar/>
            <div className="container mt-3">
                
                <Routes>
                <Route path="/users/:id"  element={<User/>}/>
                <Route path="/users" render={(props)=>{<Users{...props}/>}} element={<Users/>}  />
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                </Routes>
            </div>
        </>;
    }
  
}
 
export default App;