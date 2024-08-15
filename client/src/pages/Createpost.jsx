import React from 'react'

const Createpost = () => {
  return (
    <div className="sigup flex flex-col w-full m-auto my-32">
      <div className="inputcontainer flex flex-col gap-2">
        <label className='text-white text-center' htmlFor="username">Add Image</label>
        <input className=' px-2 py-1 mx-2 my-2 rounded-xl bg-white text-center align-middle justify-center' type="file" />
        <label className='text-white text-center' htmlFor="email">Title</label>
        <input className=' px-2 py-1 mx-2 my-2 h-20 rounded-xl bg-white' type="text" />
        <label className='text-white text-center' htmlFor="password">Description</label>
        <input className=' px-2 py-1 mx-2 my-2 rounded-xl h-80 w-90 bg-white' type="text" />
      </div>
      <div className="submitbutton my-5 rounded-xl">
        <button className='rounded-xl mx-2 my-2 px-2 py-1 bg-orange-400 text-white'>Create Post</button>
      </div>
    </div>
    
  )
}

export default Createpost