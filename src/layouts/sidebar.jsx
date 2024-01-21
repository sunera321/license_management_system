import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-slate-800 text-white fixed">
      <div className="py-4 px-6">
        <h2 className="text-xl font-semibold">Sidebar</h2>
      </div>
      <nav className="flex flex-col mt-4">
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Dashboard</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Control Panel</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Add Module</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Approval</a>
         <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Status</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">License key</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Generate Key</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Add client</a>
        <a href="#" className="py-2 px-6 hover:bg-slate-700 transition-colors">Settings</a>
        {/* Add other sidebar links here */}
      </nav>
    </div>
  );
}

export default Sidebar;
