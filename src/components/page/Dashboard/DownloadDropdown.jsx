import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx'; 
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';



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
        const csvRows = [];
        const headers = Object.keys(data[0]);
        csvRows.push(headers.join(','));

        for (const row of data) {
            const values = headers.map(header => `"${row[header]}"`);
            csvRows.push(values.join(','));
        }

        const csvString = csvRows.join('\n');
        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'export.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const exportToPDF = (elementId) => {
        console.log('Exporting to PDF...', elementId);
        const element = document.getElementById(elementId);
        if (!element) {
            console.error('Element not found:', elementId);
            return;
        }

        html2canvas(element).then(canvas => {
            const imageData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imageData, 'PNG', 15, 40, 180, 160);
            pdf.save('export.pdf');
        }).catch(error => {
            console.error('Error capturing PDF:', error);
        });
    };
    const exportToExcel = (data) => {
        console.log('Exporting to Excel...', data);
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
        XLSX.writeFile(workbook, 'export.xlsx');
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setIsOpen(!isOpen)}>
                    <h3 className="text-center">Download </h3>&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faDownload} className='pt-1' />
                </button>
            </div>
            {isOpen && (
                <div className="absolute left-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
