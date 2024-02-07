import React from 'react';
import PageHeader from '../components/CommonModal/pageHeader';

const Status = () => {
    return (
        <div><PageHeader title="STATUS OF LICENSE KEY" />
            <div className=''>
                <table className="content-center mx-auto border border-separate md:w-auto mb-11 border-spacing-2 border-slate-500 caption-top">
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

                        <tr><td className='px-20 py-3 text-lg mx-45' >001</td>
                            <td className='px-20 py-3 text-lg mx-45'>Himasha</td>
                            <td className='px-20 mx-4'><div className='items-center visible py-3 text-lg font-bold text-center text-green-600 bg-green-300 rounded-xl'>Accept</div></td>
                            <td className='px-20 mx-4'><div className='items-center visible py-3 text-lg font-bold text-center text-red-600 bg-red-300 rounded-xl'>Reject</div></td>

                            <td className='items-center '><button className='px-12 py-4 mx-10 text-transparent bg-gray-600 rounded-full hover:bg-gray-400 '> ......</button></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Status;
