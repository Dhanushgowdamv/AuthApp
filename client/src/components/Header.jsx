import React from 'react'
import {Link} from  'react-router-dom'
export default function Header() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 shadow-md '>
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 max-w-6xl mx-auto p-2">
      <Link to='/'>
      <h1 className='text-2xl font-bold animate-pulse'>Auth App</h1>

      </Link>
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-8 font-medium text-lg">
        <li className="hover:text-gray-300 transition-transform transform hover:scale-110 hover:underline duration-300">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-gray-300 transition-transform transform hover:scale-110 hover:underline duration-300">
          <a href="/About">About</a>
        </li>
        <li className="hover:text-gray-300 transition-transform transform hover:scale-110 hover:underline duration-300">
          <a href="SignIn">Sign In</a>
        </li>
      </ul>
    </div>
  </div>
  
  
  )
}
