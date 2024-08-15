import React from 'react'
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Clear the token from localStorage or sessionStorage
    localStorage.removeItem('token'); // or sessionStorage.removeItem('token')

    // Optionally clear other user-related data
    // localStorage.removeItem('user');
    // sessionStorage.removeItem('user');

    // Redirect to the login page or home page
   navigate('/sign-in'); // or history.push('/home');
  };
  
  return (
    <div onClick={handleLogout}>Logout</div>
  )
}

export default Logout