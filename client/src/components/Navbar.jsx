import React from 'react'
import {NavLink} from "react-router-dom"
import logouthandler from "../pages/Logout"

const Navbar = () => {
  return (
    <div className='bg-black-500 font-mono border-l-0 flex flex-row justify-between px-8 py-8 bg-[rgb(120,131,136)] '>
        <div className="navright rounded-md px-5 ">
            <ul className=' text-white '><NavLink to="/">Home</NavLink></ul>

        </div>
        <div className="navleft flex flex-row ">
            <ul className='flex flex-row gap-6 bg-[rgb(120,131,136)] '>
                <li  className='rounded-md px-5 text-white '><NavLink to="sign-in">Sign In</NavLink></li>
                <li className='  rounded-md px-5 text-white  '><NavLink  to="sign-up">Sign Up</NavLink></li>
                <li className='  rounded-md px-5 text-white  '><NavLink to="create-post">Create Post</NavLink></li>
                <li onClick={logouthandler} className='  rounded-md px-5 text-white  '><NavLink to="/">Log Out</NavLink></li>
            </ul>

        </div>
        
    </div>
  )
}

export default Navbar