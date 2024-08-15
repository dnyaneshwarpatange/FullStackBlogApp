import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black-500 font-mono border-l-0 flex flex-row justify-between px-8 py-8 bg-[rgb(27,48,57)] '>
        <div className="navright bg-slate-400 rounded-md px-5 ">
            Home

        </div>
        <div className="navleft flex flex-row ">
            <ul className='flex flex-row gap-6 bg-sky-950 '>
                <li className='bg-slate-400 rounded-md px-5 '>Sign In</li>
                <li className='bg-slate-400 rounded-md px-5'>Sign Up</li>
                <li className='bg-slate-400 rounded-md px-5'>Create Post</li>
                <li className='bg-slate-400 rounded-md px-5'>Log Out</li>
            </ul>

        </div>
        
    </div>
  )
}

export default Navbar