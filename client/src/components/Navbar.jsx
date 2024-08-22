import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/sign-in');
  };

  return (
    <div className='bg-black-500 font-mono border-l-0 flex flex-row justify-between px-8 py-8 bg-[rgb(120,131,136)]'>
        <div className="navright rounded-md px-5">
            <ul className='text-white'>
                <NavLink to="/">Home</NavLink>
            </ul>
        </div>
        <div className="navleft flex flex-row">
            <ul className='flex flex-row gap-6 bg-[rgb(120,131,136)]'>
                {!isLoggedIn && (
                    <>
                        <li className='rounded-md px-5 text-white'>
                            <NavLink to="sign-in">Sign In</NavLink>
                        </li>
                        <li className='rounded-md px-5 text-white'>
                            <NavLink to="sign-up">Sign Up</NavLink>
                        </li>
                    </>
                )}
                {isLoggedIn && (
                    <>
                        <li className='rounded-md px-5 text-white'>
                            <NavLink to="create-post">Create Post</NavLink>
                        </li>
                        <li className='rounded-md px-5 text-white'>
                            <NavLink to="my-posts">My Posts</NavLink>
                        </li>
                        <li onClick={handleLogout} className='rounded-md px-5 text-white'>
                            <span>Log Out</span>
                        </li>
                    </>
                )}
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
