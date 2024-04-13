import React, { useState } from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { LuAlertTriangle } from "react-icons/lu";
import FullBodyWorkoutImg from '../assets/FullBodyWorkout.png'
import UpperBodyWorkoutImg from '../assets/UpperBodyWorkout.png'
import ToggleButton from '../components/Common/ToggleButton';
import g from '../assets/g.png'
import { useNavigate } from 'react-router-dom';
import { Chart } from '../components/WorkoutTracker/Chart';
const WorkoutTracker = () => {
    const navigate=useNavigate()
    const upcomingWorkouts = [
        {
            name : 'Full Body Workout',
            date : 'Today 3 pm',
            img : FullBodyWorkoutImg
        },
        {
            name : 'Upper Body Workout',
            date : '4 Feb, 3:30 pm ',
            img :UpperBodyWorkoutImg 
        }
    ]

  return (
    <div className='relative p-4 w-full h-full'>
        <div className='flex flex-row items-center mb-[50px] '>
            <button className='inline rounded-md bg-gray-50 p-1'>
                <FaAngleLeft className='' size={14}/>
            </button>
            <h2 className='text-black w-full font-montserrat text-xl text-center font-semibold'>Workout Tracker</h2>
        </div>
        <Chart/>
        <div className='flex flex-row bg-alertShade mb-[55px] rounded-[10px] items-center gap-2 px-2 py-[10px]'>
            <LuAlertTriangle size={20} className='text-[#7E96FF]'/>
            <p className='text-black font-medium text-xs font-montserrat  '>You've burned fewer calories than yesterday. Time to get moving! </p>
        </div>

        <div className='flex flex-col gap-4'>
       <div className='flex flex-row justify-between items-center'>
       <h2 className='text-black  font-montserrat text-base font-semibold'>Upcoming Workout</h2>
       <button onClick={()=>navigate('/workout-schedule')} className='text-gray-100 font-montserrat text-xs font-medium'>See more</button>
       </div>
        <div className='flex flex-col gap-4 mb-4'>
            {
                upcomingWorkouts.map((workout,index)=>(
                    <div key={index} className='flex shadow-upcomingWorkoutShadow rounded-xl flex-row px-4 py-3 items-center justify-between'>
                        <div className='flex flex-row gap-[9px]'>
                        <img src={workout.img} alt="" className='w-[50px] h-[50px]'/>
                        <div className='flex flex-col gap-2 pt-2'>
                            <h2 className='text-black  font-montserrat text-xs font-medium'>{workout.name}</h2>
                            <p className='text-gray-100 font-montserrat text-[10px] font-medium'>{workout.date}</p>
                        </div>
                        </div> 
                        <ToggleButton/>
                    </div>
                ))
            }
        </div>
        </div>
        <div className='flex flex-col gap-4'>
            <h2 className='text-black  font-montserrat text-base font-semibold'>What Do You Want to Train</h2>
            <div className='flex flex-row justify-between p-4 bg-[#8cb1ff99] rounded-xl' >
                <div className='flex flex-col gap-[9px]'>
                    <h2 className='text-black  font-montserrat text-xs font-medium'>Full Body Workout</h2>
                   <div className='flex flex-col gap-2'>
                   <p className='text-black font-montserrat text-[10px] font-medium'>Arms</p>
                    <p className='text-black font-montserrat text-[10px] font-medium'>Chest</p>
                   </div>
                </div>
                <img src={g} className='w-[50px] h-[50px]' alt="" />
            </div>
        
        </div>
        <div className='w-full h-[77px]'>

        </div>
    </div>
  )
}

export default WorkoutTracker