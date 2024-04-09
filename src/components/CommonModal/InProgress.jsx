import React from 'react'

const InProgress = ({value}) => {
  
  return (
    <div>
        <div className="items-center visible px-3 py-2 text-base text-center text-green-800 bg-yellow-200 rounded-xl">
            
            {value}
            
            
        </div>
    </div>
  )
}

export default InProgress;