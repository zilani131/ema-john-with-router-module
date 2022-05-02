import React, { useState } from "react";

import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../firebase.init'
const Login = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const from =location.state?.from?.pathname||'/';
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error
    
  ] = useSignInWithEmailAndPassword(auth);
    const [email,setEmail]=useState(' ');
    const [password,setPassword]=useState(' ');
   
     const handleEmail=e=>{
         setEmail(e.target.value);
     }
     const handlePassword=e=>{
         setPassword(e.target.value);
     }
   
     const handleSignIn=(e)=>{
     e.preventDefault();
     signInWithEmailAndPassword(email,password)
     }
     if(user){
      navigate(from, { replace: true });
    }
     console.log(user)
  return ( 
  <div>
      <form onSubmit={handleSignIn} className="w-4/12 border border-2 border-gray-600 rounded-md shadow-xl shadow-orange-700 py-8 mx-auto mt-8">
        <h1 className="text-center font-bold text-2xl">Log in</h1>
        <div className="mx-auto w-8/12">
          <label htmlFor="email">Email</label>
          <br />
          <input           
            onBlur={handleEmail}
            className="w-11/12 border border-2 rounded-md border-gray-600 px-3 py-2 "
            placeholder="Email"
            type="email"
            name="email"
            id=""
            required
          />
        </div>
        <div className="mx-auto w-8/12">
          <label htmlFor="password">Password</label>
          <br />
          <input
            onBlur={handlePassword}
            className=" w-11/12 border border-2 rounded-md border-gray-600 px-3 py-2"
            type="password"
            placeholder="Password"
            name="password"
            id=""
            required
          />
        </div>
        <p className="text-center text-red-700">{error?.message}</p>
        {loading&&<p>Loading...</p>}
        <div className="mx-auto w-8/12 mt-8">
          <input
            
            className="bg-orange-300 hover:bg-orange-600 rounded-xl w-11/12 border border-2 border-gray-600"
            type="submit"
            value="Log in"
            name="submit"
            id=""
           
          />
        </div>
        <p className="text-lg text-center font-semibold">
          New to amazon?{" "}
          <Link to="/signup" className="text-blue-500 hover:text-blue-900">
            {" "}
            Create new Account
          </Link>
        </p>
      </form>
    </div>
    );

};

export default Login;
