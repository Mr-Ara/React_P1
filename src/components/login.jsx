import axios from 'axios';
import React, { Component, createRef } from 'react';
import  Input  from '../components/input';
import * as yup from'yup';

class Login extends React.Component {


  state= {
      account:{email:'',password:''},
      errors:[],
      sending: false,
    }

schema = yup.object().shape({
    email: yup.string().email(' not Correct Format').required(),
    password: yup.string().min(8, 'password must longer than 8 words')

})

validate = async()=>{
    try {
       const result = await this.schema.validate(this.state.account,{abortEarly:false});
        return result;
        
    } catch (error) {

        this.setState({errors:error.errors})
        
    }
}

    handleSubmit = async (e)=>{
        e.preventDefault()
        const result = await this.validate()
      
        if(result){
            try {
                
            this.setState({sending:true})
            const response = await axios.post('https://reqres.in/api/login',result)
            this.setState({sending:false})
            console.log(result)
             } catch (error) {
                this.setState({errors:['email or passwors is wrong!']})
                this.setState({sending:false})
            }
        }
        // const account = {email : this.email.current.value , password: this.password.current.value}
        // if(this.email.current.value && this.password.current.value){
        //     const response = await axios.post('https://reqres.in/api/login', account)
        //     console.log(response)
        // }
    }

    handleChange =  ({currentTarget: input})=>{
        
        const account = {...this.state.account}
        account[input.name] = input.value
        this.setState({account})
    }
    render() { 

        const {email,password} =this.state.account
        return (
           <>{
            
            this.state.errors.length !==0 &&(
                <div className="alert alert-danger">
                <ul>
                    {
                         
                        this.state.errors.map((e,i)=> <li key={i}>{e}</li>)
                    }
                </ul>
            </div>
            )
              
             
                
            
           }

           <form onSubmit={this.handleSubmit}>
            
                <Input name='email' value={this.email} label='email' onChange={this.handleChange}></Input>
                <Input name='password' value={this.password} label='password' onChange={this.handleChange}></Input>

                <button className="btn btn-primary" disabled={this.state.sending}>Login</button>
            </form>
         </>
        );
    }
}
 
export default Login;