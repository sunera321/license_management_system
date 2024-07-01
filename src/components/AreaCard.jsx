import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, Label } from 'recharts';

const AreaCard = ({ colors, percentFillValue, title }) => {
  const filledValue = (percentFillValue / 100) * 360;
  const remainedValue = 360 - filledValue;
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
};

AreaCard.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  percentFillValue: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default AreaCard;
