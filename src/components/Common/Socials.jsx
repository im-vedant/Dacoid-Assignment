import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";
const Socials = () => {
  return (
    <div className='my-6 flex flex-col gap-6'>
        <div className='flex flex-row gap-2 items-center justify-center'>
            <div className='border-b border-gray-100 w-full '></div>
            <div className='text-black text-xs font-medium font-montserrat'>Or</div>
            <div className='border-b  border-gray-100 w-full'></div>
        </div>
        <div className='mx-auto flex flex-row gap-5'>
            <button className='border border-gray-100 rounded-lg p-3'>
                <FcGoogle size={18}/>
            </button>
            <button  className='border border-gray-100 rounded-lg p-3'>
                <RiFacebookFill color='#1A7AEB' size={18}/>
            </button>
        </div>
    </div>
  )
}

export default Socials