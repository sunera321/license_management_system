import React from 'react'

const BlueButton = ({value,href}) => {
  return (
    <div>
        <button className="mt-3 p-1 text-white bg-[#111158] rounded-md font-medium text-[15px] w-[100px] hover:bg-slate-100 hover:text-black">
            <a href={href}>
            {value}
            </a>
            
        </button>
    </div>
  )
}

export default BlueButton