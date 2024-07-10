import React, { useState, useEffect } from 'react';
import PageHeader from '../components/CommonModal/pageHeader';
import { useParams } from 'react-router-dom';
import ContactForm from '../components/page/ControlPanel/ContactForm';
import PageLoader from '../components/CommonModal/PageLoader';
import HTTPService from '../Service/HTTPService';

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
                const response = await HTTPService.get(`api/LogingValidateInfo/GetClientServerInfo/${logkey}`);
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
                    const response = await HTTPService.get(`api/EndClient/getEndClientById/${clientId}`);
                    setClient(response.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchClient();
    }, [clientId]);

    const contactClient = (client) => {
        setClinetContact(true);
        setClintmail(client);
    };

    useEffect(() => {
        const fetchModules = async () => {
            if (client.id) {
                try {
                    const response = await HTTPService.get(`api/ClintIdByModules/getModulesNamesByClientId/${client.id}`);
                    setModules(response.data.length > 0 ? response.data : ['No Modules']);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchModules();
    }, [client]);

    const contactClientClose = () => {
        setClinetContact(false);
        setClintmail(null);
    };

    return (
        <div className="min-h-screen mb-5">
            <PageHeader title="Compare Data" />
            {isLoad ? (
                <PageLoader />
            ) : (
                <div className="w-11/12 mx-auto">
                    <div className="p-6 mb-6 bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-[20px] font-semibold">Logging Status</h2>
                            <span className="text-[20px]">{compareDetail.statusCode}</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-[20px] font-semibold">Partner Email</h2>
                            <span className="text-[20px]">{compareDetail.partnerEmail}</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-[20px] font-semibold">Client Name</h2>
                            <span className="text-[20px]">{client.name}</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-[20px] font-semibold">Contact Client</h2>
                            <button
                                className="px-2 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                                onClick={() => contactClient(client)}
                            >
                                Contact
                            </button>
                        </div>
                    </div>

                    

                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <table className="w-full border rounded-md">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-3">Check</th>
                                    <th className="p-3">Current Data</th>
                                    <th className="p-3">Actual Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-gray-100">
                                    <th className="p-3 bg-gray-100">Mac Address</th>
                                    <td className="p-3">{compareDetail.logMacAddress}</td>
                                    <td className="p-3">{client.macAddress}</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-100">
                                    <th className="p-3 bg-gray-100">Host URL</th>
                                    <td className="p-3">{compareDetail.logHostUrl}</td>
                                    <td className="p-3">{client.hostUrl}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 mb-6 bg-white rounded-lg shadow-lg">
                        <h3 className="mb-4 text-2xl font-semibold">Modules Accessible</h3>
                        <table className="w-full border rounded-md">
                            <tbody>
                                {modules.map((module, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-100">
                                        <td className="p-2">{index + 1}</td>
                                        <td className="p-2">{module}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            )}
            {ClinetContact && Clintmail && (
                <ContactForm client={Clintmail} onCloseClick={contactClientClose} />
            )}
        </div>
    );
}

export default CompareData;
