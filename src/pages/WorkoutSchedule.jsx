import React, { useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import plusIcon from '../../public/images/plus.svg'
import { IoAddOutline } from "react-icons/io5";
const WorkoutSchedule = () => {
  const navigate=useNavigate()
  const [currentDate, setCurrentDate]=useState(0)
  const dates=[{
date : 5,
day : 'Sun'
  },
{
  date : 6,
  day : 'Mon'
} ,{
  date : 7,
  day : 'Tue'
},{
  date : 8,
  day : 'Wed'
},{
  date : 9,
  day : 'Thu'
}]
const times=[{
time : '06:00 AM'
},{
  time : '07:00 AM',
},{
  time : '08:00 AM'
},{
  time : '09:00 AM'
},{
  time : '10:00 AM'
},{
  time : '11:00 AM'
},  {
  time : '12:00 PM'
},  {
  time : '01:00 PM'
},  {
  time : '02:00 PM'
},  {
  time : '03:00 PM'
},  {
  time : '04:00 PM'
},  {
  time : '05:00 PM'
}]
  return (
      <div className='relative w-full h-full '>
    <div className='flex px-4 flex-row pt-4 items-center mb-[14px] '>
        <button onClick={()=>navigate('/workout-tracker')} className='inline rounded-md bg-gray-50 p-1'>
            <FaAngleLeft className='' size={14}/>
        </button>
        <h2 className='text-black w-full font-montserrat text-xl text-center font-semibold'>Workout Schedule</h2>
    </div>

    <div className='text-black mb-[14px] px-4 font-montserrat font-semibold text-xs flex flex-row gap-3 justify-center items-center'>
      <FaAngleLeft size={12}/>
      <p >Feb 2024</p>
      <FaAngleRight size={12}/>
    </div>
      <div className='flex flex-row px-4 gap-2 justify-center text-center'>
        {
          dates.map((item, index)=>{
            return <div  key={index} onClick={()=>setCurrentDate(index)} className={`flex px-4 flex-1 cursor-pointer flex-col gap-1 rounded-[10px] pb-[20px]  pt-[10px] text-[#454545] font-montserrat font-semibold ${currentDate===index ? 'bg-dateGradient' : ''}`}>
                <p className='text-xs'>{item.day}</p>
                <p className='text-[24px]'>{item.date}</p>
            </div>
          })
        }
      </div>

      <div className='mt-5'>
        {
          times.map((time,index)=>{
            return <div key={index} className='border-b-[0.5px] font-semibold text-xs text-black font-montserrat border-[#7F7F7F] py-3 px-[18px]'>
                  {
                    time.time
                  }
            </div>
          })
        }
      </div>
<div className='fixed  right-[calc(50%-170px)] bottom-[120px]'>
<div className='relative'>
<img src={plusIcon} alt="" className='z-0' />
<IoAddOutline size={30} className='z-2 fixed right-[calc(50%-147px)] t bottom-[147px] text-white'/>
</div>

</div>
<div className='text-white absolute p-2 top-[256px] translate-x-[100px] text-xs bg-taskGradient rounded-[20px] font-montserrat font-semibold'>
Ab Workout, 7:30am
</div>
<div className='text-white  absolute top-[321px] translate-x-[100px]   text-xs p-2 bg-taskGradient rounded-[20px] font-montserrat font-semibold'>
Upperbody Workout, 9am
</div>
<div className='text-white absolute text-xs p-2 top-[565px] translate-x-[100px]  bg-[#F1F1F1] rounded-[20px] font-montserrat font-semibold'>
Lowerbody Workout, 3pm
</div>
<div className='w-full h-[77px]'>

</div>
</div>
  )
}

export default WorkoutSchedule