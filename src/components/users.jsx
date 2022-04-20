import React, { Component } from 'react';
import axios from 'axios';
import LoadingUser from './loading/loadingUser';

class Users extends React.Component {

   state = {
       users:[],
       isLoading:true
   } 

   async componentDidMount(){
       const response = await axios.get('https://reqres.in/api/users')
       setTimeout(()=>{
        this.setState({users:response.data.data , isLoading:false})
       },3000)
   }

    render() { 
        return <>
        <button className="btn btn-lg btn-primary" onClick={this.handleCreate}>create</button>
        <div className="row">
           {
               this.state.isLoading ? (
                   <LoadingUser/>
               ):(
                
                    this.state.users.map((user)=>{
                        return(
                            <div className="col-4 p-5 text-center" key={user.id}>
                                <img src={user.avatar} alt="" style={{borderRadius: '50%' , width: '100px'}}/>
                                <h4>{user.first_name}{user.last}</h4>
                                <h5>{user.email}</h5>
                                <div className="row">
                                    <div className="col-6">
                                        <button onClick={this.handleUpdate} className="btn btn-info btn-sm">Update</button>
                                    </div>
                                    <div className="col-6">
                                        <button onClick={this.handleDelete} className="btn btn-danger btn-sm">Delete</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                
               )
           }
        </div>
        </>;
    }

    handleCreate = ()=>{

    }

    handleDelete = (user)=>{

    }

    handleUpdate = (user)=>{

    }
}
 
export default Users;