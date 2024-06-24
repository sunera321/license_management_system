import React, { useState, useEffect } from 'react';
import PageHeader from '../components/CommonModal/pageHeader';
import Swal from 'sweetalert2';
import generate from '../Images/sidebarpic/generate.svg';
import axios from 'axios';

import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const KeyGenerateForm = () => {

    const [ClientID, setClinetID] = useState('');
    const [URL, setURL] = useState('');
    const [MacAddress, setSMA] = useState('');
    const [ValidDate, setVD] = useState('');
    const [Website, setWeb] = useState('');
    const [PartnerID, setPartnerID] = useState('');
    const [selectedModules, setSelectedModules] = useState([]);
    const [modules, setModules] = useState([]);
    const [searchParams] = useSearchParams();
    const cli = searchParams.get('client');
    const par = searchParams.get('partner');

    useEffect(() => {
        axios.get('https://localhost:7295/api/Module/getModuleswithId')
            .then(response => {
                setModules(response.data);
            })
            .catch(error => {
                console.error('Error fetching modules:', error);
            });
    }, []);


    const validateMacAddress = (macAddress) => {
        const macAddressRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
        return macAddressRegex.test(macAddress);
    };

    const handleModuleChange = (moduleId) => {
        setSelectedModules(prevSelectedModules => {
            if (prevSelectedModules.includes(moduleId)) {
                return prevSelectedModules.filter(id => id !== moduleId);
            } else {
                return [...prevSelectedModules, moduleId];
            }
        });
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (!validateMacAddress(MacAddress)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid MAC Address',
                text: 'Please enter a valid MAC address.',
            });
            return;
        }

        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlPattern.test(URL)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid URL',
                text: 'Please enter a valid URL.',
            });
            return;
        }

        const clientUrl = `https://localhost:7295/api/RequestKey/${cli}`;
        const requestKeyUrl = 'https://localhost:7295/api/RequestKey/addRequestKey';
        const updateModuleUrl = 'https://localhost:7295/api/ClintIdByModules/UpdateModule';

        const clientData = {
            hostUrl: URL,
            mackAddress: MacAddress,
            website: Website,
            
        };

        const requestKeyData = {
            isFinanceApproval: false,
            isPartnerApproval: false,
            commentFinaceMgt: "",
            commentPartnerMgt: "",
            numberOfDays: ValidDate,
            endClientId: ClientID,
            partnerId: PartnerID,
            issued:false
        };

        const updateModuleData = {
            endClientId: cli,
            moduleIds: selectedModules
        };

        console.log('Client Data:', clientData);
        console.log('Request Key Data:', requestKeyData);
        console.log('Update Module Data:', updateModuleData);

        axios.patch(clientUrl, clientData)
            .then((clientResult) => {
                axios.post(requestKeyUrl, requestKeyData)
                    .then((requestKeyResult) => {
                        axios.post(updateModuleUrl, updateModuleData)
                            .then((updateModuleResult) => {
                                Swal.fire({
                                    position: "top-center",
                                    icon: "success",
                                    title: "Form Submitted",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            })
                            .catch((updateModuleError) => {
                                console.log(updateModuleError);
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Error',
                                    text: 'Module Already available.',
                                });
                            });
                    })
                    .catch((requestKeyError) => {
                        console.log(requestKeyError);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to submit RequestKey form.',
                        });
                    });
            })
            .catch((clientError) => {
                console.log(clientError);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Please provide valid client ID.',
                });
            });
    };

    return (
        <div>
            <PageHeader title='Key Generate Form' />
            <div>
                <form onSubmit={handleSave} className='w-3/5 px-10 pt-10 pb-5 mx-auto mb-10 bg-gray-200 rounded shadow-lg'>
                    <img className='w-12 pb-3 mx-auto' src={generate} alt="Generate" />
                    <p className='pb-5 text-green-500'>Please provide following details to generate a key</p>
                    <div className="flex mb-6">
                        <div className="w-1/2 mr-3">
                            <label className="block mb-0 text-base font-semibold text-gray-700">Client ID</label><br />
                            <input required type="text" readOnly  setClinetID={ClientID}  placeholder={`${cli}`} value={`${cli}`} className="w-full px-2 py-1 leading-tight text-gray-700 border rounded shadow appearance-none"  />
                        </div>
                        <div className="w-1/2">
                            <label className="block mb-0 ml-2 text-base font-semibold text-gray-700">Partner ID</label><br />

                            <input required  placeholder={`${par}`} readOnly  value={`${par}`} type="text" name="URL" className="w-full px-2 py-1 ml-2 leading-tight text-gray-700 border rounded shadow appearance-none" />

                        </div>
                    </div>

                    <div className="flex flex-wrap mb-6">
                        <div className="w-1/2">
                            <label className="block mx-3 mb-0 text-base font-semibold text-gray-700">Host URL</label><br />
                            <input required onChange={(e) => setURL(e.target.value)} value={URL} type="text" name="URL" className="w-full px-2 py-1 mx-0 leading-tight text-gray-700 border rounded shadow appearance-none" /><br />
                        </div>
                        <div className="w-1/2">
                            <label className="block mx-3 mb-0 text-base font-semibold text-gray-700">Server Mac Address</label><br />
                            <input required onChange={(e) => setSMA(e.target.value)} value={MacAddress} type="text" className="w-full px-2 py-1 ml-3 leading-tight text-gray-700 border rounded shadow appearance-none" /> <br />
                        </div>
                    </div>

                    <div className="flex mb-8">
                        <div className="w-1/2 mr-2">
                            <label className="block mx-3 mb-0 text-base font-semibold text-gray-700">Web Site</label><br />
                            <input required onChange={(e) => setWeb(e.target.value)} value={Website} type="text" className="w-full px-2 py-1 leading-tight text-gray-700 border rounded shadow appearance-none" /> <br />
                        </div>
                        <div className="w-1/2 ml-2">
                            <label className="block mx-3 mb-0 text-base font-semibold text-gray-700">Valid date Until</label><br />
                            <select required onChange={(e) => setVD(e.target.value)} value={ValidDate} className="w-full px-2 py-1 ml-2 leading-tight text-gray-700 border rounded shadow appearance-none">
                                <option value="">Select Duration</option>
                                <option value="30">30 days</option>
                                <option value="182">182 days</option>
                                <option value="365">365 days</option>
                            </select>
                        </div>
                    </div>

                    <label className='block mx-3 mb-0 text-base font-semibold text-gray-700'>Select Modules</label><br />
                    <div className='ml-5'>
                        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
                            {modules.map((module) => (
                                <li key={module.modulesId} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                    <div className="flex items-center pl-3">
                                        <input id={`checkbox-${module.modulesId}`} type="checkbox" value={module.modulesId} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" onChange={() => handleModuleChange(module.modulesId)} />
                                        <label htmlFor={`checkbox-${module.modulesId}`} className="w-full py-3 ml-2 text-sm font-medium text-gray-900">{module.modulename}</label>
                                    </div>
                                </li>
                            ))}
                        </ul>


                    </div>
                    <div className='items-end content-end self-end justify-end pb-5 mx-auto mb-5 place-content-end place-items-end'>
                        <input type='submit' value='Submit' className="items-end w-48 p-2 mt-10 font-bold text-white bg-blue-900 rounded-md shadow-xl mb2 hover:bg-indigo-500" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default KeyGenerateForm;