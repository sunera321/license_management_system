import React from 'react'
const Clients = [
  {
    key: 1,
    name: 'Sri Lanka Air Line',
    client_id: '0213',
    Activate: '2020-12-05',
    Due: '2020-12-05',
    modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
  },
  {
    key: 2,
    name: 'Sri Lanka Air Line',
    client_id: '0213',
    Activate: '2020-12-05',
    Due: '2020-12-05',
    modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
  },
  {
    key: 3,
    name: 'Sri Lanka Air Line',
    client_id: '0213',
    Activate: '2020-12-05',
    Due: '2020-12-05',
    modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
  },
  {
    key: 4,
    name: 'Sri Lanka Air Line',
    client_id: '0213',
    Activate: '2020-12-05',
    Due: '2020-12-05',
    modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
  },
  {
    key: 5,
    name: 'Sri Lanka Air Line',
    client_id: '0213',
    Activate: '2020-12-05',
    Due: '2020-12-05',
    modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
  },
  {
    key: 6,
    name: 'Sri Lanka Air Line',
    client_id: '0213',
    Activate: '2020-12-05',
    Due: '2020-12-05',
    modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
  },
  {
    key: 7,
    name: 'Sri Lanka Air Line',
    client_id: '0213',
    Activate: '2020-12-05',
    Due: '2020-12-05',
    modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
  },
  {
    key: 8,
    name: 'Sri Lanka Air Line',
    client_id: '0213',
    Activate: '2020-12-05',
    Due: '2020-12-05',
    modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
  },
  
  
];


const ControlPanel = () => {
  const line = Clients.reduce((resultArray, item, index) => {
    const rowIndex = Math.floor(index / 2);
    if (!resultArray[rowIndex]) {
      resultArray[rowIndex] = [];
    }
    resultArray[rowIndex].push(item);
    return resultArray;
  }, []);

  return (
    <div>
      {line.map((row, rowIndex) => (
        
            <div key={rowIndex} className="flex flex-wrap justify-center gap-10 mt-5 mb-8 ml-18 mr-18 ">
          {row.map((client) => (
            <div
              key={client.key}
              className="h-auto w-[450px]  bg-[#CCC7C7] rounded-lg pb-3 shadow-lg pl-7 pr-7   lg:w-1/3 xl:w-1/3 ">
                <div className="flex gap-6 pt-2 justify-evenly">
                  <div className="text-[26px] font-normal">{client.name}</div>
                  <div className="pt-3 text-[16px]">ID-{client.client_id}</div>
                </div>
                <div className="mx-auto bg-white h-0.5 w-7/8 mt-"></div>
                <div className="flex justify-evenly pt-3   gap-2.5">
                    <div className="text-[16px] gap-1.5 flex">
                      <div className="w-4 h-4 mt-1.5 bg-[#19F000] border border-black rounded-full"></div>
                      <div className="text-[16px]">Activate:{client.Activate}</div>
                    </div>
                    <div className="text-[16px] gap-1.5 flex">
                      <div className="w-4 h-4 mt-1.5 bg-[#F10000] border border-black rounded-full"></div>
                      <div className="text-[16px]"> Due:{client.Due}</div>
                    </div>
                </div>
                <div className="text-[22px] text-center mt-2 ">Registered Modules </div>
                <div className="flex flex-col items-center justify-center -mt-0.5">
                  <div className='p-3 mt-0.5 w-5/6 h-auto bg-[#EBECEC] mx-auto  text-[16px] rounded-lg text-center'>  
                    {client.modules.map((module, index) => (                    
                      <div key={index}>{module}</div>
                    ))}
                  </div>
                  <button className="mt-3 p-1 text-white bg-[#111158] rounded-md font-medium text-[15px] w-[100px] hover:bg-slate-100 hover:text-black">Edit</button>
                </div>
              </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ControlPanel;
