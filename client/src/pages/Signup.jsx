// import React from 'react'

// export const Sigup = () => {
//   return (
//     <div className="sigup flex flex-col w-96 m-auto justify-center my-32">
//       <div className="inputcontainer flex flex-col gap-2">
//         <label className='text-white text-center' htmlFor="username">Username</label>
//         <input className=' px-2 py-1 mx-2 my-2 rounded-xl bg-white' type="text" />
//         <label className='text-white text-center' htmlFor="email">Email</label>
//         <input className=' px-2 py-1 mx-2 my-2 rounded-xl bg-white' type="email" />
//         <label className='text-white text-center' htmlFor="password">Password</label>
//         <input className=' px-2 py-1 mx-2 my-2 rounded-xl bg-white' type="password" />
//       </div>
//       <div className="submitbutton my-5 rounded-xl">
//         <button className='rounded-xl mx-2 my-2 px-2 py-1 bg-orange-400 text-white'>SignUp</button>
//       </div>
//     </div>
    
//   )
// }
import React from 'react'

const Signup = () => {
    return (
    <div className="sigup flex flex-col w-96 m-auto justify-center my-32">
      <div className="inputcontainer flex flex-col gap-2">
        <label className='text-white text-center' htmlFor="username">Username</label>
        <input className=' px-2 py-1 mx-2 my-2 rounded-xl bg-white' type="text" />
        <label className='text-white text-center' htmlFor="email">Email</label>
        <input className=' px-2 py-1 mx-2 my-2 rounded-xl bg-white' type="email" />
        <label className='text-white text-center' htmlFor="password">Password</label>
        <input className=' px-2 py-1 mx-2 my-2 rounded-xl bg-white' type="password" />
      </div>
      <div className="submitbutton my-5 rounded-xl">
        <button className='rounded-xl mx-2 my-2 px-2 py-1 bg-orange-400 text-white'>SignUp</button>
      </div>
    </div>
    
  )
}

export default Signup
