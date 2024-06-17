import React, { useState } from 'react';
import LineGraph from './../components/page/Dashboard/LineGraph';
import BarGraph from '../components/page/Dashboard/BarGraph';
import Modal from 'react-modal';
import PageHeader from "../components/CommonModal/pageHeader";
import AvailableTable from "./Availabletable";
import ActiveTable from './Activetable';
import ExpiredTable from './Expiredtable';

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
  const availableLicenseKeys = 7;
  const expiredLicenseKeys = 2;
  const activeLicenseKeys = 5;

  const [isAvailableModalOpen, setIsAvailableModalOpen] = useState(false);
  const [isActiveModalOpen, setIsActiveModalOpen] = useState(false);
  const [isExpiredModalOpen, setIsExpiredModalOpen] = useState(false);

  const openAvailableModal = () => setIsAvailableModalOpen(true);
  const closeAvailableModal = () => setIsAvailableModalOpen(false);

  const openActiveModal = () => setIsActiveModalOpen(true);
  const closeActiveModal = () => setIsActiveModalOpen(false);

  const openExpiredModal = () => setIsExpiredModalOpen(true);
  const closeExpiredModal = () => setIsExpiredModalOpen(false);

  return (
    <div className="mt-10 mx-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="rounded-lg h-[145px] bg-blue-200 p-5 shadow-md">
          <span className="text-lg font-bold text-gray-600">ISSUED LICENSE KEY</span>
          <div className="text-4xl font-bold text-gray-600">{availableLicenseKeys}</div>
          <div className="pt-4">
            <hr className="border-t border-blue-400" />
            <button onClick={openAvailableModal} className="mt-2 text-m font-bold text-gray-500 hover:text-gray-700 flex items-center justify-center">
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

        <div className="rounded-lg h-[145px] bg-emerald-200 p-5 shadow-md">
          <span className="text-lg font-bold text-gray-600">ACTIVE LICENSE KEY</span>
          <div className="text-4xl font-bold text-gray-600">{activeLicenseKeys}</div>
          <div className="pt-4">
            <hr className="border-t border-blue-400" />
            <button onClick={openActiveModal} className="mt-2 text-m font-bold text-gray-500 hover:text-gray-700 flex items-center justify-center">
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

        <div className="rounded-lg h-[145px] bg-violet-200 p-5 shadow-md">
          <span className="text-lg font-bold text-gray-600">EXPIRED LICENSE KEY</span>
          <div className="text-4xl font-bold text-gray-600">{expiredLicenseKeys}</div>
          <div className="pt-4">
            <hr className="border-t border-blue-400" />
            <button onClick={openExpiredModal} className="mt-2 text-m font-bold text-gray-500 hover:text-gray-700 flex items-center justify-center">
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

      <div className="bg-slate-100 rounded-lg mt-10 mb-10 p-2 sm:p-6 flex flex-col">
        <h1 className='font-bold'>Total users</h1>
        <div className="flex-grow">
          <LineGraph />
        </div>
      </div>
      <div className="bg-slate-100 rounded-lg mt-10 mb-10 p-2 sm:p-6 flex flex-col">
        <div className="flex-grow">
          <BarGraph />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
