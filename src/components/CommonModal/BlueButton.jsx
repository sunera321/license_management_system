import React from 'react'

const BlueButton = ({value,href}) => {
  return (
    <div>
        <button className="mt-3 px-2 py-2 text-white bg-[#111158] rounded-md font-medium text-[15px] w-[150px] h-[50px] hover:bg-slate-100 hover:text-black">
            <a href={href}>
            {value}
            </a>
            
        </button>
    </div>
  )
}

export default BlueButton