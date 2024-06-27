import React, { useState, useEffect } from 'react';
import PageHeader from '../components/CommonModal/pageHeader';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ContactForm from '../components/page/ControlPanel/ContactForm';
import PageLoader from '../components/CommonModal/PageLoader';

const CompareData = () => {
    const { logkey } = useParams();
    const [compareDetail, setCompareDetail] = useState({});
    const [client, setClient] = useState({});
    const [modules, setModules] = useState([]);
    const [Clintmail, setClintmail] = useState(null);
    const [ClinetContact, setClinetContact] = useState(false);
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        const fetchCompareDetail = async () => {
            try {
                const response = await axios.get(`https://localhost:7295/api/LogingValidateInfo/GetClientServerInfo/${logkey}`);
                setCompareDetail(response.data);
                setIsLoad(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCompareDetail();
    }, [logkey]);

    const clientId = compareDetail.clintId;

    useEffect(() => {
        const fetchClient = async () => {
            if (clientId) {
                try {
                    const response = await axios.get(`https://localhost:7295/api/EndClient/getEndClientById/${clientId}`);
                    setClient(response.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchClient();
    }, [clientId]);


    const conatctClinet = (client) => {
        setClinetContact(true);
        setClintmail(client);
    };

    useEffect(() => {
        const fetchModules = async () => {
            if (client.id) {
                try {
                    const response = await axios.get(`https://localhost:7295/api/ClintIdByModules/getModulesNamesByClientId/${client.id}`);
                    setModules(response.data.length > 0 ? response.data : ['No Modules']);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchModules();
    }, [client]);
    const conatctClinetclose = () => {
        setClinetContact(false);
        setClintmail(null);
    };

    return (
        <div className="min-h-screen mb-5 bg-white">
            <PageHeader title="Compare Data" />
            {isLoad ? (
                <>
                    <PageLoader />
                </>
            ) : (
                <>
                    <div className="w-11/12 mx-auto bg-white rounded-lg shadow-md">
                        <div className="flex justify-between p-2 mb-2 font-bold bg-gray-100 rounded-lg shadow-xl">
                            <div className="text-xl font-semibold ">Logging Status</div>
                            <div className="text-xl">{compareDetail.statusCode}</div>
                        </div>

                        <div className="flex justify-between p-2 mb-2 font-bold bg-gray-100 rounded-lg shadow-xl ">
                            <div className="text-xl font-semibold">Partner Email</div>
                            <div className="text-xl">{compareDetail.partnerEmail}</div>
                        </div>
                        <div className="flex justify-between p-2 mb-2 font-bold bg-gray-100 rounded-lg shadow-xl ">
                            <div className="text-xl font-semibold">Client Name</div>
                            <div className="text-xl">{client.name}</div>
                        </div>
                        <div className="flex justify-between p-2 mb-2 bg-gray-100 rounded-lg shadow-xl ">
                            <div className="text-xl font-semibold">Contact Client</div>
                            <div className="text-md">
                                <button
                                    className="p-1 text-black transition duration-300 border border-black rounded w-36 hover:bg-blue-700 hover:text-white focus:outline-none"
                                    onClick={() => conatctClinet(client)}
                                >
                                    Contact
                                </button>
                            </div>
                        </div>

                        <div className="p-2 mb-2 bg-gray-100 rounded-lg shadow-xl">
                            <h3 className="mb-4 text-xl font-semibold text-center uppercase">{client.name} Can Access This Software</h3>
                            <div className="overflow-auto">
                                <table className="w-full border">

                                    <tbody>
                                        {modules.map((module, index) => (
                                            <tr key={index} className="font-bold border-b">
                                                <td className="p-2">{index + 1}</td>
                                                <td className="p-2">{module}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="p-6 rounded-lg shadow-sm bg-gray-50">
                            <table className="w-full text-left border">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="p-3">Check</th>
                                        <th className="p-3">Current Data</th>
                                        <th className="p-3">Actual Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <th className="p-3 bg-gray-100">Mac Address</th>
                                        <td className="p-3">{compareDetail.logMacAddress}</td>
                                        <td className="p-3">{client.macAddress}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="p-3 bg-gray-100">Host URL</th>
                                        <td className="p-3">{compareDetail.logHostUrl}</td>
                                        <td className="p-3">{client.hostUrl}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
               )}
            {ClinetContact && Clintmail && (
                <ContactForm
                    client={Clintmail}
                    onCloseClick={conatctClinetclose}

                />
            )}
        </div>
    );
}

export default CompareData;
