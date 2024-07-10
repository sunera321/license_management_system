import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, Text } from 'recharts';
import HTTPService from '../../../Service/HTTPService';
import DownloadDropdown from './DownloadDropdown';

const StatusPieChart = () => {
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);

    useEffect(() => {
        HTTPService.get('api/LogingValidateInfo/GetAllClientServerInfo')
            .then(response => {
                const statusCounts = response.data.reduce((acc, item) => {
                    acc[item.statusCode] = (acc[item.statusCode] || 0) + 1;
                    return acc;
                }, {});

                const processedData = Object.entries(statusCounts).map(([name, value]) => ({
                    name,
                    value,
                    fill: name === 'Invalid Host URL' ? '#f94144' :
                        name === 'Invalid Mac Address' ? '#f3722c' :
                            '#43aa8b'  // Default fill for valid and other statuses
                }));

                setData(processedData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    const onPieLeave = () => {
        setActiveIndex(-1);
    };

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
        return (
            <Text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                fontWeight="500"
                style={{ textShadow: '1px 1px 2px black' }}
            >
                {`${(percent * 100).toFixed(1)}%`}
            </Text>
        );
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <h2 className="mb-2 text-lg font-semibold" style={{ marginBottom: '0px' }}>Key Status Validation Overview</h2>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                        onMouseLeave={onPieLeave}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.fill}
                                fillOpacity={index === activeIndex || activeIndex === -1 ? 1 : 0.4}
                            />
                        ))}
                    </Pie>
                    <Legend layout="horizontal" align="center" verticalAlign="bottom" onMouseEnter={onPieEnter} onMouseLeave={onPieLeave} />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-end w-full mt-4">
                <DownloadDropdown userData={data} />
            </div>
        </div>
    );
};

export default StatusPieChart;
