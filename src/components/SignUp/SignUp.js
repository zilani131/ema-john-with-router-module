import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const from =location.state?.from?.pathname||'/login';
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPw,setConfirmPw]=useState('');
    const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth);
    const [error,setError]=useState("")
     const handleEmail=e=>{
         setEmail(e.target.value);
         
     }
     console.log(email);
     const handlePassword=e=>{
         setPassword(e.target.value);
        
     }
     console.log(password)
     const handleConfirmPassword=e=>{
         setConfirmPw(e.target.value);
        
     }
     console.log(confirmPw);
     const handleSignUp=(event)=>{
      event.preventDefault();
      if(password!==confirmPw){
        setError("password don't matched")
        return;
      }
      else{
        setError('')
      }
      if(password.length<6){
         setError("at least 6 character")
         return;
      }
      else{
        setError(" ")
     
      }
      createUserWithEmailAndPassword(email,password)
     }
     console.log(user)
      
     if(user){
      navigate(from, { replace: true });
    }
    
     
    return (
        <div>
        <form onSubmit={handleSignUp} className="w-4/12 border border-2 border-gray-600 rounded-md shadow-xl shadow-orange-700 py-8 mx-auto mt-8">
          <h1 className="text-center font-bold text-2xl">Sign Up</h1>
         
          <div className="mx-auto w-8/12">
            <label htmlFor="email">Email</label>
            <br />
            <input
              onBlur={handleEmail}
              className="w-11/12 border border-2  border-gray-600 "
              placeholder="Email"
              type="email"
              name="email"
              id="emailField"
              required
            />
          </div>
          <div className="mx-auto w-8/12">
            <label htmlFor="password">Password</label>
            <br />
            <input
              onBlur={handlePassword}
              className=" w-11/12 border border-2 border-gray-600"
              type="password"
              placeholder="Password"
              name="password"
              id="passwordField"
              required
            />
          </div>
          <div className="mx-auto w-8/12">
            <label htmlFor="confirm-password"> Confirm Password</label>
            <br />
            <input
              onBlur={handleConfirmPassword}
              className=" w-11/12 border border-2 border-gray-600"
              type="password"
              placeholder="confirm Password"
              name="confirm-password"
              id="cpasswordField"
              required
            />
          </div>
           <p className='text-center text-red-700'>{error}</p>
          <div className="mx-auto w-8/12 mt-8">
            <input
        
              className="bg-orange-300 hover:bg-orange-600 rounded-xl w-11/12 border border-2 border-gray-600"
              type="submit"
              value="Sign up"
              name="submit"
              id="submitField"
            />
          </div>
        
          <p className="text-lg text-center font-semibold">
           Already have an account?
            <Link to="/login" className="text-blue-500 hover:text-blue-900">             
             Log in
            </Link>
          </p>
        </form>
      </div>
    );
};

export default SignUp;