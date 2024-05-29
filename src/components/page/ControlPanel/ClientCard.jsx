import React from 'react';

const formatDate = (datetimeString) => {
  const date = new Date(datetimeString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  
  return date.toISOString().split('T')[0];
};

const ClientCard = ({ client, onMoreInfoClick, onContactClick }) => {
  return (
    <div className="h-auto w-[450px]  bg-[#CCC7C7] rounded-lg pb-3 shadow-lg pl-4 pr-4   lg:w-1/4 xl:w-1/5 ">
      <div className="flex justify-between p-2 pt-2 0 6">
        <div className="text-[20px] font-normal">{client.name}</div>
        <div className="pt-1.5 text-[16px]">ID-{client.id}</div>
      </div>
      <div className="mx-auto bg-white h-0.5 w-7/8 mt-"></div>
      <div className="pt-3 ">
        <div className='pb-2 pl-4 font-semibold'>Partner ID : {client.partnerId}</div>
        <div className="text-[16px]  flex">
          <div className="w-4 h-4 mt-1 bg-[#19F000] border border-black rounded-full"></div>
          <div className="text-[16px]"> Activet Data : {formatDate(client.activetDate)}</div>
        </div>
        <div className="text-[16px] mt-3 flex">
          <div className="w-4 h-4 mt-1 bg-[#F10000] border border-black rounded-full"></div>
          <div className="text-[16px]"> Deactivat Data : {formatDate(client.expireDate)}</div>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center -mt-0.5">
        <div>
          <button
            value="View More"
            onClick={() => onMoreInfoClick(client)}
            className="mt-3 p-1 text-white bg-[#36ac4d] rounded-md font-medium text-[12px] w-[80px] hover:bg-slate-100 hover:text-black">
            View More
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
