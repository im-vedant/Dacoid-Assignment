import React from 'react'
import Button from '../components/Common/Button'
import Socials from '../components/Common/Socials'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
    const navigate=useNavigate()
  return (
    <div className='flex p-4 flex-col justify-between h-screen'>
       
   <form className=''>
   <h2 className='text-black font-roboto text-xl font-semibold mb-[44px]'>
           Welcome Back
        </h2>
       <div className='flex flex-col gap-6'>
       <input type="email" name='email' placeholder='Email' className='rounded-xl bg-gray-50 px-5 py-4 text-gray-100 text-xs font-semibold font-montserrat' />
        <input type="text" name='password' placeholder='Password' className='rounded-xl bg-gray-50 px-5 py-4 text-gray-100 text-xs font-semibold font-montserrat' />
       </div>
        <span className='text-gray-100 mt-[10px] cursor-pointer font-montserrat text-xs underline font-medium '>
        Forgot your password?
        </span>
   </form>
   <div>
    
    <Button onClick={()=>navigate('/goals')} className='bg-createAccountBtn rounded-xl py-4 mx-auto w-full text-base font-semibold text-white font-montserrat' >
           <p>Sign In</p>
         </Button>
         <Socials/>
     <div className='text-xs text-center font-montserrat font-medium text-black'>
     Don’t have an account yet?
         {
             " "
         }
         <span className='underline text-[#819CFF]'>
             <Link to={'/signup'}>Create an account</Link>
         </span>
     </div>
    </div>
 
    </div>
  )
}

export default SignIn