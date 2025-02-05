import React, { useEffect } from 'react'
import axios from 'axios';

const SignUp = () => {

  const fetchSign = async() => {
    const sign = await axios.get("/user/signup");
    console.log(sign);
  }

  useEffect(() => {
    fetchSign();
  }, [])
  
  return (
    <div className='container mt-4 ml-8 mb-4 p-14'>
      <form action="/user/signup" method="post">
      <div className='mb-4 flex flex-col'>
        <label for="fullName" className='text-white '>Full Name</label>
        <input id="fullName" name="fullName" className='w-40' type='text'></input>
        </div>
        <div className='mb-4 flex flex-col'>
        <label for="email" className='text-white'>Email Address</label>
        <input id="email" name="email" className='w-40' type='email'></input>
        </div>
        <div className='mb-4 flex flex-col'>
        <label for="password" className='text-white'>Password</label>
        <input id="password" name="password" className='w-40' type='password'></input>
        </div>
        <button className='text-white bg-slate-400 px-4 py-2 rounded-lg'>Submit</button>
        </form>
    </div>
  )
}

export default SignUp