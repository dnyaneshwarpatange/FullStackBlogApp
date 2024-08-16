import React from 'react';
import { useNavigate } from 'react-router-dom';


const BlogCard = ({id,title,image, description }) => {
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate(`/blog/${id}`); // Redirect to detailed page with blog ID
  };
  const truncatedDescription = description.split(' ').slice(0, 20).join(' ') + '...';
  return (
    <div className='h-96 w-96 bg-gray-700  rounded-3xl mx-7 my-10 flex justify-center flex-col'>
      <div
        className="image h-80 mx-2 my-2 bg-white rounded-2xl bg-cover flex justify-center bg-center"
        style={{ backgroundImage: `url(${image})` }}>
      </div>


      <div className="title h-32 w-80  p-2  overflow-hidden  m-auto  bg-gray-700 font-bold text-xl">
      {title}
      </div>


      <div className="description h-40 w-80  p-2  overflow-hidden  justify-center m-auto font-mono bg-gray-700 text-white text-xs  ">
      {truncatedDescription}
      </div>

      <div className="more">
        <button className='bg-[rgb(120,131,136)] h-9 w-20 my-4 rounded-2xl font-mono' onClick={handleReadMore}>
          Read
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
