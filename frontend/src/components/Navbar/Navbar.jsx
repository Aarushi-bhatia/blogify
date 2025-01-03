import React from 'react'

const Navbar = () => {
  return (
    <div className='relative p-4 pt-6 lg:pt-4 font-semibold text-sm leading-6 flex items-center justify-between gap-3 text-white'>
      <h1 className='text-2xl'>Blogify</h1>
      <div className='flex items-center text-slate-300'>
        <ul className='flex items-center gap-x-8'>
          <li>
          <a>Home</a>
          </li>
        
      <li>
      <a>Add Blog</a>
      </li>
      <li>
      <a>Aarushi Bhatia</a>
      </li>
      <ul>
        <li><a>Logout</a></li>
      </ul>
      </ul>
      </div>
    </div>
  )
}

export default Navbar