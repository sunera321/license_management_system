import React from 'react';

const Status = () => {
    return (
        <div><h1 className='my-20 font-serif text-5xl font-bold text-center text-black fill-gray-400'>STATUS OF LICENSE KEY</h1>
            <div className=' md:ml-56'>
                <table className="content-center border border-separate md:w-auto mb-11 border-spacing-2 border-slate-500 caption-top">
                    <thead className='bg-indigo-100 ' ><th className='py-5 mx-4 text-xl px-18'>Clinet ID</th>
                        <th className='py-5 mx-4 text-xl px-18 '>Clinet name</th>
                        <th className='px-20 py-5 mx-4 text-xl'>Partner Manager</th>
                        <th className='px-20 py-5 mx-4 text-xl '>Finance manager</th>
                        <th className='py-5 mx-4 text-xl px-18 '>Issue</th></thead>
                    <tbody >
                        <tr><td className='px-20 py-3 text-lg mx-45' >001</td>
                            <td className='px-20 py-3 text-lg mx-45'>Himasha</td>
                            <td className='px-20 mx-4'><div className='items-center visible py-3 text-lg font-bold text-center text-green-600 bg-green-300 rounded-xl'>Accept</div></td>
                            <td className='px-20 mx-4'><div className='items-center visible py-3 text-lg font-bold text-center text-red-600 bg-red-300 rounded-xl'>Reject</div></td>

                            <td className='items-center '><button className='px-12 py-4 mx-10 text-transparent bg-green-600 rounded-full hover:bg-green-200 '> ......</button></td></tr>
<<<<<<< Updated upstream
                        <tr><td className='px-20 py-3 text-xl mx-45' >001</td>
                            <td className='px-20 py-3 text-xl mx-45'>Himashaaaaaaaaaaaaa</td>
                            <td className='px-10 mx-4'><div className='items-center visible py-3 text-xl font-bold text-center text-green-600 bg-green-300 rounded-xl'>Accept</div></td>
                            <td className='px-10 mx-4'><div className='items-center visible py-3 text-xl font-bold text-center text-red-600 bg-red-300 rounded-xl'>Reject</div></td>
=======
                        <tr><td className='px-20 py-3 text-lg mx-45' >001</td>
                            <td className='px-20 py-3 text-lg mx-45'>Himasha</td>
                            <td className='px-20 mx-4'><div className='items-center visible py-3 text-lg font-bold text-center text-green-600 bg-green-300 rounded-xl'>Accept</div></td>
                            <td className='px-20 mx-4'><div className='items-center visible py-3 text-lg font-bold text-center text-red-600 bg-red-300 rounded-xl'>Reject</div></td>
>>>>>>> Stashed changes
                            <td className='items-center '><button className='px-12 py-4 mx-10 text-transparent bg-gray-600 rounded-full hover:bg-gray-400 '> ......</button></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Status;
