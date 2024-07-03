import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, TimeScale, Title, Tooltip, Legend } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import 'chartjs-adapter-date-fns';
import HTTPService from '../../../Service/HTTPService';
import DownloadDropdown from './DownloadDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const LineGraph = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HTTPService.get('api/LicenseKey/statistics');
        const data = response.data;

        // Map data to dates and counts
        const dates = data.map(item => new Date(item.date).toISOString().split('T')[0]);
        const counts = data.map(item => item.count);

        // Generate dataset
        const dataset = {
          label: 'Daily Data',
          data: counts,
          borderColor: 'rgba(0, 123, 255, 0.8)',
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          pointRadius: 3,
          pointHoverRadius: 5,
          fill: true
        };

        setChartData({
          labels: dates,
          datasets: [dataset]
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleZoomIn = () => {
    const chart = chartRef.current;
    chart.zoom(1.2);
  };
  const buttonStyle = "flex items-center justify-center p-2 rounded shadow bg-gray-100 hover:bg-gray-200";

  const options = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Dates',
        },
        type: 'time',
        time: {
          unit: 'day',
          tooltipFormat: 'MMM dd, yyyy',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count',
        },
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            if (Number.isInteger(value)) {
              return value;
            }
            return null;
          }
        },
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.3,
        borderWidth: 2,
      },
      point: {
        radius: 3, // Show points on the line
      },
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'x',
        },
      },
    },
  };

  return (
    <div className="w-full px-4 md:px-0">
      <div className="relative h-64 md:h-80 lg:h-96">
        <Line ref={chartRef} data={chartData} options={options} />
      </div>
      <div className="flex justify-end w-full mt-4 space-x-2">
        <button onClick={handleZoomIn} className={buttonStyle}>
          <FontAwesomeIcon icon={faSearchPlus} />
        </button>
        <DownloadDropdown userData={chartData} />
      </div>
    </div>
  );
};

export default LineGraph;