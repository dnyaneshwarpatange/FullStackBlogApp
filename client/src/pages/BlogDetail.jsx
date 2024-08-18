import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/blogData'; // Adjust the path if needed

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find(blog => blog.id === parseInt(id, 10));

  // if (!blog) {
  //   return <div className="flex justify-center items-center h-screen text-lg">Blog not found</div>;
  // }

  return (
    <div className="max-w-3xl mx-auto p-6 shadow-md rounded-lg text-white">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-semibold text-whitw-800">{blog.title}</h2>
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