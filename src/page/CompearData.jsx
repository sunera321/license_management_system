import React, { useState, useEffect } from 'react';
import PageHeader from '../components/CommonModal/pageHeader'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const CompearData = () => {
    const params = useParams();
    const logkey = params.logkey;
    const [compearDtl, setcompearDtl] = useState([]);
    const [client, setclient] = useState([]);

    console.log(logkey);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://localhost:7295/api/LogingValidateInfo/GetClientServerInfo/${logkey}`);
                setcompearDtl(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            console.log(compearDtl);
        };

        fetchData();
    }, [logkey]);

    console.log(compearDtl.clintId);
    const clientId = compearDtl.clintId;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://localhost:7295/api/EndClient/getEndClientById/${clientId}`);
                setclient(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [clientId]);

    return (
        <>
        <div class="min-h-screen">
            <PageHeader title="Compear Data" />
           
              
       
            <div className="w-11/12 pl-2 pr-2 mx-auto mt-5 font-bold bg-gray-800 notification-box rounded-xl">
                <div className="flex justify-between p-2 pl-10 pr-10 ">
                    <div className='text-xl text-gray-200' >Loging status</div>
                    <div className='text-xl text-gray-200' >{compearDtl.statusCode}</div>
                </div>

            </div>
            <div className="w-11/12 pl-2 pr-2 mx-auto mt-5 font-bold bg-gray-800 notification-box rounded-xl">

                <div className="flex justify-between p-2 pl-10 pr-10 ">
                    <div className='text-xl text-gray-200' >Partner Email</div>
                    <div className='text-xl text-gray-200' >{compearDtl.partnerEmail}</div>
                </div>

            </div>
            <div className="w-11/12 pl-2 pr-2 mx-auto mt-5 font-bold bg-gray-800 notification-box rounded-xl">

                <div className="flex justify-between p-2 pl-10 pr-10 ">
                <div className='text-xl text-gray-200' >Use Module</div>
                <div className='text-xl text-gray-200' >Action</div>
                </div>

            </div>
            <div class=" content-center flex mt-5">


                <table class="  content-center  mx-auto w-11/12 text-sm text-left rtl:text-right  text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                        <th class="pl-3 text-lg bg-gray-200 dark: text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-200 w-1/5">
                                Check
                            </th>
                            <th class="pl-3 text-lg bg-gray-200 dark: text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-200 w-1/5">
                                Crrent Data
                            </th>
                            <th class="pl-3 text-lg bg-gray-200     dark: text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-200 w-1/5">
                                Actual Data
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 h-32   ">
                            <th class="pl-3 text-lg bg-gray-200 dark: text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-200 w-1/5">
                                Mac Address
                            </th>
                            <td class="px-6 py-4 w-2/5 text-lg">
                                {compearDtl.logMacAddress}
                            </td>
                            <td class="px-6 py-4 w-2/5 text-lg">
                                {client.mackAddress}
                            </td>

                        </tr>

                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 h-32 ">
                        <th class="pl-3 text-lg bg-gray-200 dark: text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-200 w-1/5">
                                Host URL
                            </th>
                            <td class="px-6 py-4 w-2/5 text-lg">
                               {compearDtl.logHostUrl}
                            </td>
                            <td class="px-6 py-4 w-2/5 text-lg">
                                {client.hostUrl}
                            </td>

                        </tr>


                    </tbody>
                </table>
                
            </div>


        </div>
        </>


    )
}

export default CompearData