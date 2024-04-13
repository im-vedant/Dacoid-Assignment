import React from "react";
import Button from "../components/Common/Button";
import { useNavigate } from "react-router-dom";
const Goals = () => {
    const navigate=useNavigate()
  const goals = [
    {
      id: 1,
      text: "Weight Loss",
    },
    {
      id: 2,
      text: "Muscle Gain",
    },
    {
      id: 3,
      text: "Flexibility and Mobility",
    },
    {
      id: 4,
      text: "General Fitness",
    },
    {
      id : 5,
      text : 'Event - specific training'
    },
    {
        id : 6,
        text : 'Mindfulness and Mental Health'
    }
  ];
  return (
    <div className="py-6 p-4 flex flex-col justify-between h-screen">
    

      <form className="">
      <h2 className="text-black text-center font-montserrat text-xl mb-[44px] font-semibold">
        What are your goals?
      </h2>
       <div className="flex flex-col gap-4 ">
       {
            goals.map((goal)=>{
                return (
                    <div key={goal.id} className="flex rounded-xl bg-gray-50 flex-row items-center justify-between pl-5 pr-3 py-[18px]">
                        <label className="text-black font-montserrat text-xs font-semibold" htmlFor={goal.text.replace(' ', '-')}>
                            {
                                goal.text
                            }
                        </label>
                        <input type="checkbox" className="border border-[#809AFF]" name={goal.text.replace(' ', '-')} id={goal.text.replace(' ', '-')} />

                    </div>
                )
            })
        }
       </div>
      
      </form>

      <Button onClick={()=>navigate('/workout-tracker')}>
        <p>Confirm</p>
      </Button>
    </div>
  );
};

export default Goals;
