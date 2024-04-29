import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PieChart, Pie, Cell, Label } from 'recharts'; // Import Legend from recharts
import LineChart from '../components/LineChart';
import Chart from '../components/Chart';
import 'react-datepicker/dist/react-datepicker.css';
import BarChart from '../components/BarChart'; // Assuming BarChart is imported from the correct location

const AreaCard = ({ colors, percentFillValue, title }) => {
  const filledValue = (percentFillValue / 100) * 360; // Calculate filled value
  const remainedValue = 360 - filledValue; // Calculate remained value
  const data = [
    { name: "Remained", value: remainedValue },
    { name: "Show Value", value: filledValue }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full p-5">
      <h2 className="mb-2 text-lg font-semibold">{title}</h2>
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
          <div className="w-4 h-4 mr-2 bg-blue-200 rounded-full"></div>
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
    <div className='flex flex-col items-start justify-between h-full col-span-2 gap-3 p-2'>
      <div className="flex items-center justify-between w-full mb-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-ash">Hi, Welcome back to Hsenid Admin!</p>
        </div>
        <div className="items-center p-2 mr-24 shadow-md lg:w-54 ">
          <label htmlFor="period" className="block mb-2 ">Period:</label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            className="relative px-2 py-1 border rounded"
          />
        </div>
      </div>
      {/* Total Module, Total Users, and Total Revenue section */}
      <div className='grid w-full grid-cols-1 gap-4 mb-4 lg:grid-cols-3'>
        <div className='flex flex-col items-center justify-center w-full gap-5 p-5 transition-transform bg-blue-200 rounded-xl'>
          <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold text-black text-md'>Total Module </h1>
            <h1 className='font-semibold text-green-600'>+75%</h1>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col items-start justify-center gap-1'>
              <h1 className='text-3xl font-semibold text-black'>328</h1>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-5 p-5 transition-transform bg-green-200 rounded-xl'>
          <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold text-black text-md'>Total Users</h1>
            <h1 className='font-semibold text-green-600'>+25%</h1>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col items-start justify-center gap-1'>
              <h1 className='text-3xl font-semibold text-black'>65</h1>
              <p className='text-slate-700'>+25% (30 days)</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-between w-full gap-5 p-5 transition-transform bg-yellow-200 rounded-xl'>
          <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold text-black text-md'>Total Revenue</h1>
            <h1 className='font-semibold text-green-600'>+10%</h1>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col items-start justify-center gap-1'>
              <h1 className='text-3xl font-semibold text-black'>Rs 12,800</h1>
              <p className='text-slate-700'>+10% (30 days)</p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid w-full grid-cols-1 gap-4 mb-4 lg:grid-cols-2'>
        <div className='w-full mb- mr-7'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
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
