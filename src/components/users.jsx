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
       },1000)
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
                                        <button onClick={()=>{this.handleUpdate(user)}} className="btn btn-info btn-sm">Update</button>
                                    </div>
                                    <div className="col-6">
                                        <button onClick={()=>{this.handleDelete(user)}} className="btn btn-danger btn-sm">Delete</button>
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

    handleCreate = async()=>{

        const newUser ={
            first_name:'AmiReza',
            last_name:'Asadi',
            email: 'mr.ara1999@gmail.com',
            avatar: 'https://i.postimg.cc/7LFKPHQd/post4.jpg',
        }

        const Response = await axios.post('https://reqres.in/api/users',newUser)
        this.setState({users:[...this.state.users,newUser]})
    }


    handleUpdate = async(user)=>{
       user.first_name = "Ahmad"
       const response = await axios.put(`https://reqres.in/api/users/${user.id}`,user)
       const updatedUser = [... this.state.users];
       const index = updatedUser.indexOf(user);
       
       updatedUser[index] = {... user}
       this.setState({users: updatedUser})
    }

    handleDelete = async(user)=>{
        const response = await axios.delete(`https://reqres.in/api/users/${user.id}`);
        const newUser = this.state.users.filter(u => u.id !== user.id);
        
        this.setState({users : newUser});
    }

}
 
export default Users;