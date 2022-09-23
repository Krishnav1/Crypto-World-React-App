import React from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-2xl font-bold'>Sign In</h1>
        <form>
          {/* Email Section */}
          <div className='my-4'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input className='w-full p-2 bg-primary border border-input rounded-2xl' type="email" placeholder='Enter Your Email' />
              <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>

          {/* Password Section */}
          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input className='w-full p-2 bg-primary border border-input rounded-2xl' type="password" placeholder='Enter Your Password' />
              <AiFillLock className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>

          {/* Sign In Button Section */}
          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sign in</button>
        </form>
        <p className='my-4'>
          Don't have an account? <Link to='/signup' className='text-accent'>Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Signin