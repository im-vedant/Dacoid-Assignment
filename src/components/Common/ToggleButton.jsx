import React, { useState } from 'react'

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-[19px] w-[34px] rounded-full ${
              isChecked ? 'bg-[#8099FF]' : 'bg-gray-100'
            }`}
          ></div>
          <div
            className={`absolute left-[2.5px] top-[2.4px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
    </>
  )
}

export default ToggleButton
