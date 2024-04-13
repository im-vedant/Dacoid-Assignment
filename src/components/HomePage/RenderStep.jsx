import React from 'react'
import TrackYourGoalImg from '../../assets/TrackYourGoal.png'
import GetBurnImg from '../../assets/GetBurn.png'
const data =[{
    id:1,
    title:'Track Your Goal',
    description :'Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals', 
    img:TrackYourGoalImg
},{
    id : 2,
    title :'Get Burn',
    description : 'Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever',
    img : GetBurnImg
}
]
const RenderStep = ({step }) => {
  return (
    <div className='flex h-full flex-grow  flex-col  justify-between items-center'>
        <img className='' src={data[step-1].img} alt="" />
        <div className='flex flex-col gap-4'>
            <h2 className='text-xl text-black font-montserrat font-semibold '>{data[step-1].title}</h2>
            <p className='text-[#787878] font-medium text-base font-montserrat'>{data[step-1].description}</p>
        </div>
    </div>
  )
}

export default RenderStep