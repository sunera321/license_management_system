import React from 'react';

const Clients = [
    {
        key: 1,
        clientID: 'C001',
        name: 'Sri Lanka Air Line',
        Country: 'Sri Lanka',
        Partner_Requested: 'Mr. davin Jhonson',
        Requested_Time_Period: '1 Year',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },
    {
        key: 2,
        clientID: 'C001',
        name: 'Sri Lanka Air Line',
        Country: 'Sri Lanka',
        Partner_Requested: 'Mr. davin Jhonson',
        Requested_Time_Period: '1 Year',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },
    {
        key: 3,
        clientID: 'C003',
        name: 'SLT Telicom',
        Country: 'Sri Lanka',
        Partner_Requested: 'Mr. davin Jhonson',
        Requested_Time_Period: '1 Year',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },
    {
        key: 4,
        name: 'Sri Lanka Air Line',
        client_id: '0213',
        Activate: '2020-12-05',
        Due: '2020-12-05',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },
    {
        key: 5,
        name: 'Sri Lanka Air Line',
        client_id: '0213',
        Activate: '2020-12-05',
        Due: '2020-12-05',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },
    {
        key: 6,
        name: 'Sri Lanka Air Line',
        client_id: '0213',
        Activate: '2020-12-05',
        Due: '2020-12-05',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },
    {
        key: 7,
        name: 'Sri Lanka Air Line',
        client_id: '0213',
        Activate: '2020-12-05',
        Due: '2020-12-05',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },
    {
        key: 8,
        name: 'Sri Lanka Air Line',
        client_id: '0213',
        Activate: '2020-12-05',
        Due: '2020-12-05',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },


];



function PartnerManagerApproval() {
    const line = Clients.reduce((resultArray, item, index) => {
        const rowIndex = Math.floor(index / 2);
        if (!resultArray[rowIndex]) {
            resultArray[rowIndex] = [];
        }
        resultArray[rowIndex].push(item);
        return resultArray;
    }, []);

    return (
        <div>
        <div>
            {line.map((row, rowIndex) => (

                <div key={rowIndex} className="flex flex-wrap justify-center gap-10 mt-5 mb-8 ml-18 mr-18 ">
                    {row.map((client) => (
                        <div
                            key={client.key}
                            className="h-auto w-[450px]  bg-[#CCC7C7] rounded-lg pb-3 shadow-lg pl-7 pr-7   lg:w-1/3 xl:w-1/3 ">
                            <div className="flex gap-6 pt-2 justify-evenly">
                                <div className="text-[26px] font-normal">{client.name}</div>

                            </div>
                            <div className="mx-auto bg-white h-0.5 w-7/8 overflow-hidden"></div>
                            <table className='content-center justify-center w-full '>
                                <thead className=''>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className='content-center justify-center ml-10'>
                                    <tr >
                                        <td className='py-3'>Client Name</td>
                                        <td>:</td>
                                        <td className='pl-5'>{client.name}</td>
                                    </tr>
                                    <tr>
                                        <td className='py-3'>Client ID</td>
                                        <td>:</td>
                                        <td className='pl-5'>{client.clientID}</td>
                                    </tr>
                                    <tr>
                                        <td className='py-3'>Country</td>
                                        <td>:</td>
                                        <td className='pl-5'>{client.Country}</td>
                                    </tr>
                                    <tr>
                                        <td className='py-3'>Partner time Period</td>
                                        <td>:</td>
                                        <td className='pl-5'>{client.Partner_Requested}</td>
                                    </tr>
                                    <tr>
                                        <td className='py-3'>Partner Requested</td>
                                        <td>:</td>
                                        <td className='pl-5'>{client.Requested_Time_Period}</td>
                                    </tr>
                                    <tr>
                                        <td className='py-3'>Requested Module</td>
                                        <td>:</td>
                                        <td className='pl-5'>{client.modules.map((module, index) => (
                                    <div key={index}>{module}</div>
                                ))}</td>
                                    </tr>
                                    <div className='ml-3'>Partner manager Approval</div>
                                    <tr>
                                        <td className='py-3'> <button className="w-48 p-2 mt-10 font-bold text-white bg-green-600 rounded-md shadow-xl hover:bg-green-300 ">Accept</button></td>
                                        <td></td>
                                        <td className='pl-5'><button className="w-48 p-2 mt-10 font-bold text-white bg-red-700 rounded-md shadow-xl hover:bg-red-500 ">Reject</button></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            

                        </div>

                    ))}
                </div>
            ))}
        </div>

    </div>
    );
}

export default PartnerManagerApproval;
