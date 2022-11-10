import React,{useState} from 'react';
import  axios from 'axios';
import {useNavigate } from 'react-router-dom';
import './Form.css'
// import Render from './Render';
 const Form = () => {
  let navigate = useNavigate();
   const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    mobileNum:'',
    username:''
   })
   const {name,email,password,mobileNum,username}=data;
   const changeHandler =e =>{
    setData({...data,[e.target.name]:e.target.value})
   }
   const submitHandler = e=>{
    e.preventDefault(); 
    axios.post('https://ixonotest.herokuapp.com/api/User/submit-profile',data)
    .then(  (response)=>{
      // history.replace("/").
      navigate("/output");
        
    }).catch((error)=>{
      console.log(error);
    })
    console.log(data);
   }
  return ( 
    <form className="container" onSubmit={submitHandler}>
      <div className="header">
        <h1>SUBMIT PROFILE</h1>
      <div>
        <input type='text' placeholder="name"
        name="name" value={name} onChange={changeHandler}></input>
      </div>
      <div>
        <input type='text' placeholder="email"
        name="email"value={email} onChange={changeHandler}></input>
      </div> 
      <div>
        <input type='text' placeholder="password"
        name="password"value={password} onChange={changeHandler}></input>
      </div> 
      <div>
        <input type='text' placeholder="mobileNum"
        name="mobileNum"value={mobileNum} onChange={changeHandler}></input>
      </div>
      <div>
        <input type='text' placeholder="username"
        name="username"value={username} onChange={changeHandler}></input>
      </div> 
      <div>
        <button type="submit">SUBMIT</button>
      </div>
      </div>   
    </form>
  )
}

export default Form;
       