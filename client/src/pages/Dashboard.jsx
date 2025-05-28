import React, { useState } from 'react';
import PortfolioForm from '../components/PortfolioForm';
import PreviewCard from '../components/PreviewCard';

const Dashboard = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);       // Set form data for preview
    setShowPreview(true);    // Show preview instead of form
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Dashboard</h2>

      {/* Conditional rendering: either Form or Preview */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        {showPreview ? (
          <>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Live Preview</h3>
            <PreviewCard formData={formData} />
          </>
        ) : (
          <>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Fill Portfolio Details</h3>
            <PortfolioForm onSubmit={handleFormSubmit} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
