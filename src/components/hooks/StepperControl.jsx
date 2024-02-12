import React from 'react'

function StepperControl({handleClick,currentStep,steps}) {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
       <button 
    onClick={() => handleClick("")}
    className={`bg-green-700 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? " cursor-not-allowed" : ""}`}>
    Previous
</button>

        <button 
        onClick={()=>handleClick("next")} className='bg-green-700 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>{currentStep=== steps.length -1 ? "Conform":"Next"}</button>
         
    </div>
  )
}

export default StepperControl
