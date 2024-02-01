
import React, { useState } from 'react'
import {auth} from '../auth.js'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { sendPasswordResetEmail } from 'firebase/auth'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const Home = () => {
const navigate = useNavigate();
const [email , setemail] = useState('');
const [password , setpassword] = useState('');
const [user , setuser] = useState('');

const handleSubmit = async(e)=>{
  try{
    const userCredential = await signInWithEmailAndPassword(auth,email,password);
    toast.success("login succesful");
     setuser(userCredential.user);
    navigate('/dashboard');
  }catch(error){
    console.log(error);
    toast.error(error.message);
  }
};
const handleforgotpassword = async(e)=>{
e.preventDefault();
if(email){
  try{
    await sendPasswordResetEmail(auth,email);
    toast.success('Password reset email sent. Check your inbox.');
  }catch(error){
    console.log(error.message);
    toast.error('Error sending password reset email. Please try again.');
  }
}else{
  toast.error('enter your email first');
}


}
  return (
    <div className='container'>
      <form  className='form1' onSubmit={(e)=>{e.preventDefault(); handleSubmit();}}>
      <div className='user'><i className='fa fa-user fa-5x' style={{color:'#80b3ff'}}></i></div>
      <input type='email' placeholder='Enter Email' value={email} required onChange={(e)=>{setemail(e.target.value)}}/><br/>
      <input type='password' placeholder='Enter Password' value={password} onChange={(e)=>{setpassword(e.target.value)}} required/>
      <button className='btn btn-primary' type='submit'>Login</button>
      <div className='a'><a href='/register'>Don't Have a account! Create one.</a><a href='#' onClick={handleforgotpassword}>forgot password</a></div>
      </form>
    </div>
  )
}

export default Home
