import React from 'react';

const BlogCard = ({title,image, description }) => {
  return (
    <div className='h-96 w-96 bg-gray-700  rounded-3xl mx-7 my-10 flex justify-center flex-col'>
      <div
        className="image h-80 mx-2 my-2 bg-white rounded-2xl bg-cover flex justify-center bg-center"
        style={{ backgroundImage: `url(${image})` }}>
      </div>


      <div className="title h-32 w-80  p-2  overflow-hidden  m-auto font-mono bg-gray-700 font-bold text-xl">
      {title}
      </div>


      <div className="description h-40 w-80  p-2  overflow-hidden  justify-center m-auto font-mono bg-gray-700 text-white text-xs  ">
      {description + "..."}
      </div>

      <div className="more">
        <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-9 w-20 my-4 rounded-2xl font-mono'>
          Read
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
