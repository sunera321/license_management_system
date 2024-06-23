import React, { useState , useEffect } from 'react';
import LineGraph from './../components/page/Dashboard/LineGraph';
import BarGraph from '../components/page/Dashboard/BarGraph';
import Modal from 'react-modal';
import PageHeader from "../components/CommonModal/pageHeader";
import AvailableTable from "./Availabletable";
import ActiveTable from './Activetable';
import ExpiredTable from './Expiredtable';
import StatusBarGraph from '../components/page/Dashboard/statusBarGraph';
import axios from 'axios';
import StatusPieChart from '../components/page/Dashboard/piechart';
import DownloadDropdown from '../components/page/Dashboard/DownloadDropdown';

const customStyles = {
  content: {
    top: '10%',
    bottom: '10%',
    left: '50%',
    right: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, 0)',
    width: '80%',
    maxWidth: '95vw',
    maxHeight: '80vh',
    overflow: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(3px)' // Blur effect
  }
};

const Dashboard = () => {
  const [licenseCounts, setLicenseCounts] = useState({
    available: 0,
    active: 0,
    expired: 0
  });

  const [activeTab, setActiveTab] = useState('totalUsers');

  const [isAvailableModalOpen, setIsAvailableModalOpen] = useState(false);
  const [isActiveModalOpen, setIsActiveModalOpen] = useState(false);
  const [isExpiredModalOpen, setIsExpiredModalOpen] = useState(false);

  const openAvailableModal = () => setIsAvailableModalOpen(true);
  const closeAvailableModal = () => setIsAvailableModalOpen(false);

  const openActiveModal = () => setIsActiveModalOpen(true);
  const closeActiveModal = () => setIsActiveModalOpen(false);

  const openExpiredModal = () => setIsExpiredModalOpen(true);
  const closeExpiredModal = () => setIsExpiredModalOpen(false);

  useEffect(() => {
    const fetchLicenseData = async () => {
      try {
        const response = await axios.get('https://localhost:7295/api/LicenseKey/info');
        countLicenses(response.data);
      } catch (error) {
        console.error('Error fetching license data:', error);
      }
    };
  
    fetchLicenseData();
  }, []);
  
  const countLicenses = (data) => {
    const counts = {
      available: data.filter(license => license.keyStatus === 'Available').length,
      active: data.filter(license => license.keyStatus === 'Activated').length,
      expired: data.filter(license => license.keyStatus === 'Expired').length
    };
    setLicenseCounts(counts);
  };

  return (
    <div className="mt-10 mx-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="rounded-lg h-[145px] bg-blue-200 p-5 shadow-xl">
          <span className="text-lg font-bold text-gray-600">ISSUED LICENSE KEY</span>
          <div className="text-4xl font-bold text-gray-600">{licenseCounts.available}</div>
          <div className="pt-4 ">
            <hr className="border-t border-blue-400" />
            <button onClick={openAvailableModal} className="mt-2 text-m font-bold text-gray-500 hover:text-gray-700 flex ">
              View More
            </button>

            {/* Available License Keys Modal */}
            <Modal isOpen={isAvailableModalOpen} onRequestClose={closeAvailableModal} style={customStyles} ariaHideApp={false}>
              <button onClick={closeAvailableModal} style={{ background: 'none', cursor: 'pointer', color: 'red' }}>
                Close
              </button>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <PageHeader title="Issued License Keys" />
              </div>
              <div style={{ overflowX: 'auto' }}>
                <AvailableTable />
              </div>
            </Modal>
          </div>
        </div>

        <div className="rounded-lg h-[145px] bg-emerald-200 p-5 shadow-xl">
          <span className="text-lg font-bold text-gray-600">ACTIVE LICENSE KEY</span>
          <div className="text-4xl font-bold text-gray-600">{licenseCounts.active}</div>
          <div className="pt-4">
            <hr className="border-t border-emerald-400" />
            <button onClick={openActiveModal} className="mt-2 text-m font-bold text-gray-500 hover:text-gray-700 flex ">
              View More
            </button>

            {/* Active License Keys Modal */}
            <Modal isOpen={isActiveModalOpen} onRequestClose={closeActiveModal} style={customStyles} ariaHideApp={false}>
              <button onClick={closeActiveModal}  style={{ background: 'none', cursor: 'pointer', color: 'red' }}>
                Close
              </button>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <PageHeader title="Active License Keys" />
              </div>
              <div style={{ overflowX: 'auto' }}>
                <ActiveTable />
              </div>
            </Modal>
          </div>
        </div>

        <div className="rounded-lg h-[145px] bg-violet-200 p-5 shadow-xl">
          <span className="text-lg font-bold text-gray-600">EXPIRED LICENSE KEY</span>
          <div className="text-4xl font-bold text-gray-600">{licenseCounts.expired}</div>
          <div className="pt-4">
            <hr className="border-t border-violet-400" />
            <button onClick={openExpiredModal} className="mt-2 text-m font-bold text-gray-500 hover:text-gray-700 flex ">
              View More
            </button>

            {/* Expired License Keys Modal */}
            <Modal isOpen={isExpiredModalOpen} onRequestClose={closeExpiredModal} style={customStyles} ariaHideApp={false}>
              <button onClick={closeExpiredModal} style={{ background: 'none', cursor: 'pointer', color: 'red' }}>
                Close
              </button>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <PageHeader title="Expired License Keys" />
              </div>
              <div style={{ overflowX: 'auto' }}>
                <ExpiredTable />
              </div>
            </Modal>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-5 p-2 sm:p-6">
      <div className="flex flex-wrap justify-around items-center">
        <div className="w-full md:w-1/2 p-4">
          <h1 className='font-bold text-center'>Total Users</h1>
          
          <LineGraph /> 
         
        </div>
        <div className="w-full md:w-1/2 p-4">
        
          <StatusPieChart />
        </div>
      </div>
    </div>

      <div className=" rounded-lg mt-5 mb-10 p-2 sm:p-6 flex flex-col">
      <div className="flex justify-around border-b-2 border-gray-300">
        <button 
          className={`py-2 px-4 ${activeTab === 'totalUsers' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('totalUsers')}
        >
          Total Users
        </button>
        <button 
          className={`py-2 px-4 ${activeTab === 'operatingStatus' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('operatingStatus')}
        >
          Operating Status
        </button>
      </div>
      <div className="mt-5 p-2 sm:p-6 flex flex-col">
        {activeTab === 'totalUsers' && (
          <div className="flex-grow"> 
            <BarGraph />
            <DownloadDropdown/>
          </div>
        )}
        {activeTab === 'operatingStatus' && (
          <div className="flex-grow">
            <StatusBarGraph/>
            <DownloadDropdown/>
          </div>
        )}
      </div>
    </div>
   



    </div>
  )
}

export default Dashboard;
