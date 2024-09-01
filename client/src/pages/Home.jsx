import React, { useEffect, useState } from 'react';
import BlogCard from "../components/BlogCard";

const Home = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch('https://blogx-dusky.vercel.app//blogs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setBlogData(data))
      .catch(error => console.error('Error fetching blog data:', error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {blogData.map(blog => (
        <BlogCard
          key={blog._id}
          id={blog._id}
          title={blog.title}
          image={blog.image}
          description={blog.description}
        />
      ))}
    </div>
  );
};

export default Home;
