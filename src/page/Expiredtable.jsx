import React from "react";

const ExpiredLicenseKeys = () => {
    return (
        <div>
            <h1 className='my-20 font-serif text-5xl font-bold text-center text-black'>EXPIRED LICENSE KEYS</h1>
            <div className='md:ml-52'>
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className='px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                Client ID
                            </th>
                            <th className='px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                Client Name
                            </th>
                            <th className='px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                            
                            </th>
                            
                            <th className='px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                Issue Date
                            </th>
                            <th className='px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                Expire Date
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td className='px-20 py-3 text-xl mx-45' >01129A</td>
                            <td className='px-20 py-3 text-xl mx-45'>Manchee</td>
                            <td className='px-20 py-3 text-xl mx-45'>abh123@gmail.com</td>
                            <td className='px-20 py-3 text-xl mx-45'>2018-12-03</td>
                            <td className='px-20 py-3 text-xl mx-45'>2021-12-03</td> 
                        </tr>
                      
                    </tbody>
                    </table>
            </div>
        </div>
    );
};

