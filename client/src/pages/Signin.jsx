import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://blogx-dusky.vercel.app//sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("Login Successful");
        login(); // Set the user as logged in
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="signin flex flex-col w-96 m-auto justify-center my-32">
      <form className='inputcontainer flex flex-col gap-2' onSubmit={handleSubmit}>
        <div className="inputcontainer flex flex-col gap-2">
          <label className='text-white text-center' htmlFor="email">Email</label>
          <input
            className='px-2 py-1 mx-2 my-2 rounded-xl bg-white'
            type="email"
            name='email'
            value={user.email}
            onChange={handleInput}
            required
          />
          <label className='text-white text-center' htmlFor="password">Password</label>
          <input
            className='px-2 py-1 mx-2 my-2 rounded-xl bg-white'
            type="password"
            name='password'
            value={user.password}
            onChange={handleInput}
            required
          />
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="submitbutton my-5 rounded-xl">
          <button type='submit' className='rounded-xl mx-2 my-2 px-2 py-1 bg-orange-400 text-white'>Sign In</button>
        </div>
      </form>
    </div>
  );
}
