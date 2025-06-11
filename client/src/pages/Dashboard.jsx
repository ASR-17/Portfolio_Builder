import React, { useEffect, useState } from 'react';
import PortfolioForm from '../components/PortfolioForm';
import PreviewCard from '../components/PreviewCard';

const Dashboard = () => {
  const [formData, setFormData] = useState(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("portfolioData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleReset = () => {
    localStorage.removeItem("portfolioData");
    setFormData(null); // Switch back to form
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-500 font-sans">Dashboard</h2>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        {formData ? (
          <>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Live Preview</h3>
            <PreviewCard formData={formData} />
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleReset}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
              >
                Reset Form
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Fill Portfolio Details</h3>
            <PortfolioForm
              onSubmit={() => {
                const storedData = localStorage.getItem("portfolioData");
                if (storedData) {
                  setFormData(JSON.parse(storedData));
                }
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
