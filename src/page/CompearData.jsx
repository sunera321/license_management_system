import React, { useState, useEffect } from 'react';
import PageHeader from '../components/CommonModal/pageHeader'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const CompearData = () => {
    const params = useParams();
    const logkey = params.logkey;
    const [compearDtl, setcompearDtl] = useState([]);
    const [client, setclient] = useState([]);
    const [moduledata, setmoduledata] = useState([]);
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


    useEffect(() => {
        const fetchData = async (clientId) => {
            try {
                const response = await axios.get(`https://localhost:7295/api/ClintIdByModules/getModulesNamesByClientId/${clientId}`);
                setmoduledata(response.data);
                console.log(response.data);
                if (response.data.length == 0) {
                    setmoduledata(['No Modules']);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (client && client.id) {
            fetchData(client.id);
        }

    }, [client]);
    var clientName = client.name;
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

                <h3 className="mb-2 text-2xl font-semibold text-center text-gray-200">{clientName} has Modules</h3>
                        <div className='text-xl text-gray-200' >
                            <div className="mt-2">
                               
                                <div className="flex flex-wrap">
                                    <table className="w-full ">
                                        <tbody>
                                            {moduledata.map((module, index) => (
                                                <tr key={index}>
                                                    <td className="text-lg ">{index + 1}</td>
                                                    <td className="text-lg ">{module}</td>
                                                    
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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
                                {client.macAddress} 
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


        </div >
        </>


    )
}

export default CompearData