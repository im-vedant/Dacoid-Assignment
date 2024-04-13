import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TrackYourGoalImg from '../assets/TrackYourGoal.png'
import GetBurnImg from '../assets/GetBurn.png'
import { FaChevronRight } from "react-icons/fa";
import RenderStep from '../components/HomePage/RenderStep';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [step , setStep]=useState(1)
    const navigate=useNavigate()
    function clickHandler(){
        if(step<=1){
            setStep(step+1)
        }
        else{
            navigate('/signup')
        }
    }
  return (
    <div className='flex p-4 min-h-screen flex-col justify-between gap-[50px] '>
        <p className='underline text-right text-[#9FB2FF] font-montserrat text-base font-medium '>
            <Link to={'/signup'}>Skip</Link>
        </p>
      <RenderStep step={step}/>
        <button onClick={clickHandler } className='bg-blueShade ml-auto rounded-full w-fit  '>
            <div className='flex justify-center items-center p-[13px]'>
                <FaChevronRight size={24} color='white'/>
            </div>
        </button>
    </div>
  )
}

export default Home