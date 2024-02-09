import React from 'react'

const Expiredtable = () => {
  return (
    <div className="overflow-x-auto ">
      <div className='md:ml-26 '>
        <table className="content-center w-full mx-auto text-center md:w-auto mb-11 border-spacing-2 border-slate-500 caption-top">
          <thead className="bg-gray-200">
            <tr>
              <th className='px-4 py-3 md:px-6 text-l md:text-base'>Client ID</th>
              <th className='px-4 py-3 text-xl md:px-6 md:text-base'>Client Name</th>
              <th className='px-4 py-3 text-xl md:px-6 md:text-base'>Email Address</th>
              <th className='px-4 py-3 text-xl md:px-6 md:text-base'>Issue Date</th>
              <th className='px-4 py-3 text-xl md:px-6 md:text-base'>Expire Date</th>
            </tr>
          </thead>
                    <tbody >
                        <tr>
                            <td className='px-4 py-3 text-lg' >01129A</td>
                            <td className='px-4 py-3 text-lg'>Manchee</td>
                            <td className='px-4 py-3 text-lg'>abh123@gmail.com</td>
                            <td className='px-4 py-3 text-lg'>2018-12-03</td>
                            <td className='px-4 py-3 text-lg'>2021-12-03</td> 
                        </tr>
                        <tr>
                            <td className='px-4 py-3 text-lg' >01129A</td>
                            <td className='px-4 py-3 text-lg'>Manchee</td>
                            <td className='px-4 py-3 text-lg'>abh123@gmail.com</td>
                            <td className='px-4 py-3 text-lg'>2018-12-03</td>
                            <td className='px-4 py-3 text-lg'>2021-12-03</td> 
                        </tr>
                        <tr>
                            <td className='px-4 py-3 text-lg' >01129A</td>
                            <td className='px-4 py-3 text-lg'>Manchee</td>
                            <td className='px-4 py-3 text-lg'>abh123@gmail.com</td>
                            <td className='px-4 py-3 text-lg'>2018-12-03</td>
                            <td className='px-4 py-3 text-lg'>2021-12-03</td> 
                        </tr>
                        <tr>
                            <td className='px-4 py-3 text-lg' >01129A</td>
                            <td className='px-4 py-3 text-lg'>Manchee</td>
                            <td className='px-4 py-3 text-lg'>abh123@gmail.com</td>
                            <td className='px-4 py-3 text-lg'>2018-12-03</td>
                            <td className='px-4 py-3 text-lg'>2021-12-03</td> 
                        </tr>
                      
                    </tbody>
                    </table>
            </div>
            
        </div>
  )
}

export default Expiredtable