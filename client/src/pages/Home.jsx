import React from 'react';
import BlogCard from "../components/BlogCard";
import blogData from "../data/blogData";

const Home = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {blogData.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          image={blog.image}
          description={blog.description}
        />
      ))}
    </div>
  );
};

export default Home;
