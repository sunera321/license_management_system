import React from 'react';
import PageHeader from '../components/CommonModal/pageHeader';

const Status = () => {
    return (
        <div><PageHeader title='Approval Status' />
      
            <div className='mt-10'>
                <table className="content-center w-2/4 mx-auto border border-separate table-auto mb-11 border-spacing-2 border-slate-500 caption-top ">
                    <thead className='bg-indigo-100 ' ><th className='px-0 py-3 mx-0 text-lg font-semibold'>Clinet ID</th>
                        <th className='px-0 py-0 mx-0 text-lg font-semibold '>Clinet name</th>
                        <th className='px-0 py-0 mx-0 text-lg font-semibold '>Partner Manager</th>
                        <th className='px-0 py-0 mx-0 text-lg font-semibold '>Finance manager</th>
                        <th className='px-0 py-0 mx-0 text-lg font-semibold '>Issue</th></thead>
                    <tbody  >
                        <tr ><td className='px-20 py-2 text-base text-center border-b-2 border-slate-500' >001</td>
                            <td className='px-20 py-2 text-base text-center border-b-2 mx-45 border-slate-500'>Himasha</td>
                            <td className='px-20 py-2 text-base border-b-2 mx-45 border-slate-500'><div className='items-center visible px-3 py-2 text-base text-center text-green-800 bg-green-300 rounded-xl'>Accept</div></td>
                            <td className='px-20 py-2 text-base border-b-2 mx-45 border-slate-500'><div className='items-center visible px-4 py-2 text-base text-center text-red-600 bg-red-300 rounded-xl'>Reject</div></td>

                            <td className='align-middle border-b-2 border-slate-500'><button className='py-2 mx-12 text-white transition duration-300 ease-in-out delay-150 bg-green-600 rounded-full px-7 hover:-translate-y-1 hover:scale-110 hover:bg-green-400'> ISSUE</button></td></tr>


                            <tr ><td className='py-2 text-base text-center border-b-2 border-slate-500' >001</td>
                            <td className='px-20 py-2 text-base text-center border-b-2 mx-45 border-slate-500'>Himasha</td>
                            <td className='px-20 py-2 text-base border-b-2 mx-45 border-slate-500'><div className='items-center visible px-3 py-2 text-base text-center text-green-800 bg-green-300 rounded-xl'>Accept</div></td>
                            <td className='px-20 py-2 text-base border-b-2 mx-45 border-slate-500'><div className='items-center visible px-4 py-2 text-base text-center text-red-600 bg-red-300 rounded-xl'>Reject</div></td>

                            <td className='align-middle border-b-2 border-slate-500'><button className='py-2 mx-12 text-white transition duration-300 ease-in-out delay-150 bg-green-600 rounded-full px-7 hover:-translate-y-1 hover:scale-110 hover:bg-green-400'> ISSUE</button></td></tr>
                            
                            
                            <tr ><td className='py-2 text-base text-center border-b-2 border-slate-500' >001</td>
                            <td className='px-20 py-2 text-base text-center border-b-2 mx-45 border-slate-500'>Himasha</td>
                            <td className='px-20 py-2 text-base border-b-2 mx-45 border-slate-500'><div className='items-center visible px-3 py-2 text-base text-center text-green-800 bg-green-300 rounded-xl'>Accept</div></td>
                            <td className='px-20 py-2 text-base border-b-2 mx-45 border-slate-500'><div className='items-center visible px-4 py-2 text-base text-center text-red-600 bg-red-300 rounded-xl'>Reject</div></td>

                            <td className='align-middle border-b-2 border-slate-500'><button className='py-2 mx-12 text-white transition duration-300 ease-in-out delay-150 bg-green-600 rounded-full px-7 hover:-translate-y-1 hover:scale-110 hover:bg-green-400'> ISSUE</button></td></tr>

                            
                            <tr ><td className='py-2 text-base text-center border-b-2 border-slate-500' >001</td>
                            <td className='px-20 py-2 text-base text-center border-b-2 mx-45 border-slate-500'>Himasha</td>
                            <td className='px-20 py-2 text-base border-b-2 mx-45 border-slate-500'><div className='items-center visible px-3 py-2 text-base text-center text-green-800 bg-green-300 rounded-xl'>Accept</div></td>
                            <td className='px-20 py-2 text-base border-b-2 mx-45 border-slate-500'><div className='items-center visible px-4 py-2 text-base text-center text-red-600 bg-red-300 rounded-xl'>Reject</div></td>

                            <td className='align-middle border-b-2 border-slate-500'><button className='py-2 mx-12 text-white transition duration-300 ease-in-out delay-150 bg-green-600 rounded-full px-7 hover:-translate-y-1 hover:scale-110 hover:bg-green-400'> ISSUE</button></td></tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Status;
