import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PieChart, Pie, Cell, Label } from 'recharts'; // Import Legend from recharts
import LineChart from '../components/LineChart';
import Chart from '../components/Chart';
import BarChart from '../components/BarChart'; // Assuming BarChart is imported from the correct location

const AreaCard = ({ colors, percentFillValue, title }) => {
  const filledValue = (percentFillValue / 100) * 360; // Calculate filled value
  const remainedValue = 360 - filledValue; // Calculate remained value
  const data = [
    { name: "Remained", value: remainedValue },
    { name: "Show Value", value: filledValue }
  ];

  return (
    <div className="p-5 flex justify-center items-center flex-col w-full relative">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={50}
          paddingAngle={0}
          dataKey="value"
          startAngle={-270}
          endAngle={150}
          stroke='none'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
          <Label value={`${percentFillValue}%`} position="center" fill="#000" />
        </Pie>
      </PieChart>
      <div className="flex justify-center">
        <div className="flex items-center mr-4">
          <div className="w-4 h-4 rounded-full bg-blue-200 mr-2"></div>
          <span className="text-sm">Show Value</span>
        </div>
      </div>
    </div>
  );
}

function IncomeDashboard() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className='col-span-2 p-2 gap-3 flex flex-col justify-between items-start h-full'>
      <div className="flex justify-between items-center w-full mb-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-ash">Hi, Welcome back to Hsenid Admin!</p>
        </div>
        <div className="lg:w-54 p-2 shadow-md items-center mr-24 ">
          <label htmlFor="period" className="block mb-2 ">Period:</label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            className="border rounded px-2 py-1 relative"
          />
        </div>
      </div>
      {/* Total Module, Total Users, and Total Revenue section */}
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 w-full mb-4'>
        <div className='w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform'>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-md text-black font-semibold'>Total Module </h1>
            <h1 className='text-green-600 font-semibold'>+75%</h1>
          </div>
          <div className='w-full flex justify-between items-center'>
            <div className='flex flex-col justify-center items-start gap-1'>
              <h1 className='text-3xl text-black font-semibold'>328</h1>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center bg-green-200 p-5 rounded-xl gap-5 transition-transform'>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-md text-black font-semibold'>Total Users</h1>
            <h1 className='text-green-600 font-semibold'>+25%</h1>
          </div>
          <div className='w-full flex justify-between items-center'>
            <div className='flex flex-col justify-center items-start gap-1'>
              <h1 className='text-3xl text-black font-semibold'>65</h1>
              <p className='text-slate-700'>+25% (30 days)</p>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col justify-between items-center bg-yellow-200 p-5 rounded-xl gap-5 transition-transform'>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-md text-black font-semibold'>Total Revenue</h1>
            <h1 className='text-green-600 font-semibold'>+10%</h1>
          </div>
          <div className='w-full flex justify-between items-center'>
            <div className='flex flex-col justify-center items-start gap-1'>
              <h1 className='text-3xl text-black font-semibold'>Rs 12,800</h1>
              <p className='text-slate-700'>+10% (30 days)</p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 w-full mb-4'>
        <div className='w-full mb- mr-7'>
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
            {/* Three pie charts */}
            <AreaCard colors={["#0088FE", "#00C49F"]} percentFillValue={75} title="Total Module" />
            <AreaCard colors={["#FF8042", "#FFBB28"]} percentFillValue={60} title="User Growth" />
            <AreaCard colors={["#8884d8", "#82ca9d"]} percentFillValue={85} title="Total Revenue" />
          </div>
        </div>
        <div className="w-full">
          <div className='mb-4'>
            <BarChart /> {/* Assuming BarChart component is imported and correctly implemented */}
          </div>
        </div>
      </div>
      <div className="w-full mb-8">
        <div className="w-full mb-32">
          <LineChart />
        </div>
        <div className="w-full">
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default IncomeDashboard;
