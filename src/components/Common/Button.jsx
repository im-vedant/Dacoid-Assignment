import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button  className='bg-createAccountBtn rounded-xl py-4 mx-auto w-full text-base font-semibold text-white font-montserrat' onClick={onClick}>
        {
            children
        }
    </button>
  )
}

export default Button