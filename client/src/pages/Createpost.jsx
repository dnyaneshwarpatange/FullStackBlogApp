import React from 'react'

const Createpost = () => {
  return (
    <div className="signup bg-[rgb(99,106,109)] h-[35rem] w-[50rem] flex gap-2 m-auto my-12 rounded-xl flex-col justify-center">
      <label className='mx-[20rem] text-center h-6 w-[10rem] rounded-md text-white px-2 bg-gray-950' htmlFor="imageurl">Enter URL of Image</label>
      <input className='mx-[8rem] bg-white h-6 w-[30rem] rounded-md' type="text" />

      <label className='mx-[20rem] h-6 w-[11rem] rounded-md text-white px-2 bg-gray-950' htmlFor="title">Enter Title-min 5 char </label>
      <input className='mx-[8rem] bg-white h-6 w-[30rem] rounded-md' type="text" />


      <label className='mx-[18rem] h-6 w-[15rem] rounded-md text-white px-2 bg-gray-950' htmlFor="imageurl">Enter Description-min 50 char</label>
      <input className='mx-[5rem] bg-white h-[20rem] w-[40rem] rounded-md' type="text" />

      <button className='bg-[rgb(57,71,77)] w-[4rem] rounded-xl mx-20 text-white text-lg border-spacing'>Post</button>

    </div>
    
  )
}

export default Createpost