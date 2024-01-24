import React from 'react';

const Slidebar = () => {
  return (
    <div className="h-screen w-64 bg-slate-800 text-white fixed">
      <div className="py-4 px-6">
        <h2 className="text-xl font-semibold">Sidebar</h2>
      </div>
      <nav className="flex flex-col mt-4">
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Dashboard</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Control Panel</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Approvals</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Status</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">License Key</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Generate Key</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Add Client</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Settings</a>

        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Help</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Logout</a>
        
      </nav>
    </div>
  );
}

export default Slidebar;
