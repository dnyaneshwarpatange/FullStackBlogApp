import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://blogx-dusky.vercel.app/sign-up", { // Changed to HTTP
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
      });
      
      if (response.ok) {
        alert('signed up');
        setUser({
          username: '',
          email: '',
          password: '',
        });
        navigate('/create-post');
      }
      console.log('Form Submitted', user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup flex flex-col w-96 m-auto justify-center my-32">
      <form onSubmit={handleSubmit} className="inputcontainer flex flex-col gap-2">
        <label className="text-white text-center" htmlFor="username">
          Username
        </label>
        <input
          className="px-2 py-1 mx-2 my-2 rounded-xl bg-white"
          type="text"
          name="username"
          value={user.username}
          onChange={handleInput}
          required
        />
        <label className="text-white text-center" htmlFor="email">
          Email
        </label>
        <input
          className="px-2 py-1 mx-2 my-2 rounded-xl bg-white"
          type="email"
          name="email"
          value={user.email}
          onChange={handleInput}
          required
        />
        <label className="text-white text-center" htmlFor="password">
          Password
        </label>
        <input
          className="px-2 py-1 mx-2 my-2 rounded-xl bg-white"
          type="password"
          name="password"
          value={user.password}
          onChange={handleInput}
          required
        />
        <div className="submitbutton my-5 rounded-xl">
          <button type="submit" className="rounded-xl mx-2 my-2 px-2 py-1 bg-orange-400 text-white">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
