import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

// Dummy data for demonstration
const userData = [
    { Product: 'HR Enterprise', Users: 7 },
    { Product: 'HRO', Users: 4 },
    { Product: 'Juura', Users: 2 },
    { Product: 'People HR', Users: 5 },
    { Product: 'Tracking System', Users: 3 }
];

const DownloadDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const exportToCSV = (data) => {
        console.log('Exporting to CSV...', data);
        // Implement CSV export logic here
    };

    const exportToPDF = (elementId) => {
        console.log('Exporting to PDF...', elementId);
        // Implement PDF export logic here
    };

    const exportToExcel = (data) => {
        console.log('Exporting to Excel...', data);
        // Implement Excel export logic here
    };

    return (
        <div className="relative inline-block text-left top-right">
            <div>
                <button 
                    type="button" 
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" 
                    onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faDownload} />
                </button>
            </div>
            {isOpen && (
                <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => exportToCSV(userData)}>Export to CSV</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => exportToPDF('chart')}>Export to PDF</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => exportToExcel(userData)}>Export to Excel</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DownloadDropdown;
