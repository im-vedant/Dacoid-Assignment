import React from 'react'
import Button from '../components/Common/Button'
import Socials from '../components/Common/Socials'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const navigate=useNavigate()
  return (
    <div className='flex p-4 flex-col justify-between h-screen'>
       
   <form className=''>
   <h2 className='text-black font-roboto text-xl mb-[44px] font-semibold'>
            Create an account
        </h2>
       <div className='flex flex-col gap-6'>
       <input type="text" name='firstName' placeholder='First Name' className='rounded-xl bg-gray-50 px-5 py-4 text-gray-100 text-xs font-semibold font-montserrat' />
        <input type="text" name='lastName' placeholder='Last Name' className='rounded-xl bg-gray-50 px-5 py-4 text-gray-100 text-xs font-semibold font-montserrat' />
        <input type="email" name='email' placeholder='Email' className='rounded-xl bg-gray-50 px-5 py-4 text-gray-100 text-xs font-semibold font-montserrat' />
        <input type="text" name='password' placeholder='Password' className='rounded-xl bg-gray-50 px-5 py-4 text-gray-100 text-xs font-semibold font-montserrat' />
        <div className='flex flex-row justify-center items-center gap-2'>
            <input type="checkbox" name='termsAndCondition' />
            <label className='text-gray-100 font-montserrat text-xs font-medium' htmlFor="termsAndCondition">
            By proceeding, I agree to all 
            { " "}
            <span className='underline text-[#93A9FF]'>T&C</span>
            { " "}
             and  
            { " "}
            <span className='underline text-[#93A9FF]'>Privacy Policy</span>
            { " "}
            </label>
        </div>
        </div>
      
   </form>
   <div>
    
   <Button onClick={()=>navigate('/signin')} className='bg-createAccountBtn rounded-xl py-4 mx-auto w-full text-base font-semibold text-white font-montserrat' >
          <p>  Create an Account</p>
        </Button>
        <Socials/>
    <div className='text-xs text-center font-montserrat font-medium text-black'>
        Already have an account? 
        {
            " "
        }
        <span className='underline text-[#819CFF]'>
            <Link to={'/signin'}>Login</Link>
        </span>
    </div>
   </div>

    </div>
  )
}

export default SignUp