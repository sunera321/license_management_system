
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RatingReview from '../components/page/ReviewRating/RatingReview';
import HTTPService from '../Service/HTTPService';
const ModuleDetails = () => {
  const { moduleId } = useParams();
  const [module, setModule] = useState(null);

  useEffect(() => {
    const fetchModuleDetails = async () => {
      try {
        const response = await HTTPService.get(`api/Module/${moduleId}`);
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
      <div className="p-6 border border-gray-300 rounded-lg shadow-lg"> {/* Added frame styles */}
        <div className="relative w-full py-20 mt-0 bg-gray-200">
          <div className="absolute flex items-center justify-center transform -translate-y-1/2 rounded-full top-1/2 right-20 bg-white-800 w-70 h-60">
            <img src={module.imagePath} alt="Module" className="w-60 h-50" />
          </div>
          <div className="absolute font-bold text-black transform -translate-y-1/2 top-1/4 right-1/2 translate-x-1/6" style={{ textAlign: 'center', marginTop: '30px', fontSize: '25px', right: '40%' }}>
            {module.modulename}
          </div>
          <div className="absolute font-bold text-black transform -translate-y-1/2 top-1/4 right-1/2 translate-x-1/6" style={{ textAlign: 'center', marginTop: '60px', fontSize: '15px', right: '40%' }}>
            Completed in {module.completedYear || formatDate(module.createdData)}
          </div>
          <div className="absolute text-black transform -translate-y-1/2 top-1/4 right-1/2 translate-x-1/6" style={{ textAlign: 'center', marginTop: '90px', fontSize: '10px', right: '40%' }}>
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
      {/* Separate Card for Ratings & Reviews */}
      <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
          <h2 className="pb-4 text-lg font-semibold text-gray-700 border-b">Ratings & Reviews</h2>
          <RatingReview moduleId={module.moduleId} />
        </div>
    </div>
  );
};

export default ModuleDetails;
