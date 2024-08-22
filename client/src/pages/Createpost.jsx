import React, { useState } from 'react';

const CreatePost = () => {
  const [post, setPost] = useState({
    image: '', // Changed from imageUrl to image
    title: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://blogx-dusky.vercel.app/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        alert('Post created successfully');
        setPost({
          image: '', // Changed from imageUrl to image
          title: '',
          description: '',
        });
      } else {
        alert('Failed to create post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="create-post bg-[rgb(99,106,109)] h-[35rem] w-[50rem] flex gap-2 m-auto my-12 rounded-xl flex-col justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className='text-center h-6 w-[10rem] rounded-md text-white px-2 bg-gray-950' htmlFor="image">
          Enter URL of Image
        </label>
        <input
          className='bg-white h-6 w-[30rem] rounded-md mx-auto'
          type="text"
          name="image" // Changed from imageUrl to image
          value={post.image}
          onChange={handleInputChange}
          required
        />

        <label className='text-center h-6 w-[11rem] rounded-md text-white px-2 bg-gray-950' htmlFor="title">
          Enter Title (min 6 char)
        </label>
        <input
          className='bg-white h-6 w-[30rem] rounded-md mx-auto'
          type="text"
          name="title"
          value={post.title}
          onChange={handleInputChange}
          minLength="6"
          required
        />

        <label className='text-center h-6 w-[15rem] rounded-md text-white px-2 bg-gray-950' htmlFor="description">
          Enter Description (min 50 char)
        </label>
        <textarea
          className='bg-white h-[20rem] w-[40rem] rounded-md mx-auto'
          name="description"
          value={post.description}
          onChange={handleInputChange}
          minLength="50"
          required
        />

        <button
          type="submit"
          className='bg-[rgb(57,71,77)] w-[4rem] rounded-xl mx-auto text-white text-lg border-spacing'
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
