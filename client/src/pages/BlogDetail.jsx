import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/blogs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const foundBlog = data.find(blog => blog._id === id);
        setBlog(foundBlog);
      })
      .catch(error => console.error('Error fetching blog details:', error));
  }, [id]);

  if (!blog) {
    return <div className="flex justify-center items-center h-screen text-lg">Blog not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 shadow-md rounded-lg text-white">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-semibold text-white-800">{blog.title}</h2>
      </div>

      <div className="flex justify-center mb-6">
        <img src={blog.image} alt={blog.title} className="rounded-lg shadow-lg" />
      </div>

      <div className="prose max-w-full">
        <p className="text-white-700">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
