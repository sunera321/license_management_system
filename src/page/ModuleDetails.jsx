import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ModuleDetails = () => {
  const { moduleId } = useParams();
  const [module, setModule] = useState(null);

  useEffect(() => {
    const fetchModuleDetails = async () => {
      try {
        const response = await axios.get(`https://localhost:7295/api/Module/${moduleId}`);
        setModule(response.data);
      } catch (error) {
        console.error('Error fetching module details:', error);
      }
    };

    if (moduleId) {
      fetchModuleDetails();
    }
  }, [moduleId]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!module) {
    return <div>Loading...</div>; // Handle loading state or error 
  }

  return (
    <div className="py-20" style={{ paddingTop: '50px',  paddingRight: '20px'}}>
      <div className="border border-gray-300 rounded-lg shadow-lg p-6"> {/* Added frame styles */}
        <div className="bg-gray-200 py-20 w-full mt-0 relative">
          <div className="absolute top-1/2 transform -translate-y-1/2 right-20 bg-white-800 rounded-full w-70 h-60 flex justify-center items-center">
            <img src={module.imagePath} alt="Module" className="w-60 h-50" />
          </div>
          <div className="absolute top-1/4 transform -translate-y-1/2 right-1/2 translate-x-1/6 text-black font-bold" style={{ textAlign: 'center', marginTop: '30px', fontSize: '25px', right: '40%' }}>
            {module.modulename}
          </div>
          <div className="absolute top-1/4 transform -translate-y-1/2 right-1/2 translate-x-1/6 text-black font-bold" style={{ textAlign: 'center', marginTop: '60px', fontSize: '15px', right: '40%' }}>
            Completed in {module.completedYear || formatDate(module.createdData)}
          </div>
          <div className="absolute top-1/4 transform -translate-y-1/2 right-1/2 translate-x-1/6 text-black" style={{ textAlign: 'center', marginTop: '90px', fontSize: '10px', right: '40%' }}>
            Powered by {module.poweredBy || 'Hsenid'}
          </div>
        </div>

        <div>
          <h1 style={{ color: '#084c88', marginBottom: '20px', textAlign: 'left', marginTop: '40px' }}>Module Details</h1>
          <p style={{ marginBottom: '20px', textAlign: 'left' }}>
            {module.moduleDescription}
          </p>
        </div>

        <div>
          <h1 style={{ color: '#084c88', marginBottom: '20px', textAlign: 'left' }}>Module Features</h1>
          <p style={{ marginBottom: '20px', textAlign: 'left' }}>
            {module.features}
          </p>
        </div>

        <div>
          <ul className="list-disc" style={{ textAlign: 'left' }}>
            {module.featureList && module.featureList.map((feature, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModuleDetails;
