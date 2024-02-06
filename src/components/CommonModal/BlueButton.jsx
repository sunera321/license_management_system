import React from 'react'

const BlueButton = ({value}) => {
  return (
    <div>
        <button className="mt-3 p-1 text-white bg-[#111158] rounded-md font-medium text-[15px] w-[100px] hover:bg-slate-100 hover:text-black">
            {value}
        </button>
    </div>
  )
}

export default BlueButton