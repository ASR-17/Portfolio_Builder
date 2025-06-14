import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PortfolioForm from '../components/PortfolioForm';
import PreviewCard from '../components/PreviewCard';

const Dashboard = () => {
  const [formData, setFormData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("portfolioData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setFormData(parsedData);
        setShowForm(false);
        setIsSaved(false); // assume not saved to history yet
      } catch (error) {
        console.error("❌ Failed to parse portfolioData:", error);
        setFormData(null);
      }
    }
  }, []);

  const handleReset = () => {
    localStorage.removeItem("portfolioData");
    setFormData(null);
    setShowForm(true);
    setIsSaved(false);
  };

  const handleSaveToPortfolio = () => {
    try {
      const existingList = JSON.parse(localStorage.getItem("portfolioList")) || [];
      const newEntry = { ...formData, timestamp: new Date().toISOString() };
      const updatedList = [...existingList, newEntry];
      localStorage.setItem("portfolioList", JSON.stringify(updatedList));
      setIsSaved(true);
      alert("✅ Resume saved to portfolio history.");
    } catch (err) {
      console.error("❌ Failed to save to portfolio:", err);
    }
  };

  const handleFormSubmit = (data) => {
  if (!data) return;

  try {
    const selectedTheme = localStorage.getItem("selectedTheme") || "modern";

    const resumeWithMetadata = {
      ...data,
      timestamp: new Date().toISOString(),
      theme: selectedTheme, // ✅ add theme to each resume
    };

    const existingList = JSON.parse(localStorage.getItem("portfolioList")) || [];
    const updatedList = [...existingList, resumeWithMetadata];

    localStorage.setItem("portfolioList", JSON.stringify(updatedList));
    localStorage.setItem("portfolioData", JSON.stringify(resumeWithMetadata));

    setFormData(resumeWithMetadata);
    navigate("/templates");
  } catch (err) {
    console.error("❌ Error saving form data:", err);
  }
};


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 mt-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-300">
        {formData && !showForm ? (
          <>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Live Preview</h3>
            <PreviewCard formData={formData} />
            <div className="mt-4 flex justify-between">
              <div className="flex gap-3">
                <button
                  onClick={handleSaveToPortfolio}
                  disabled={isSaved}
                  className={`${
                    isSaved ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                  } text-white font-semibold py-2 px-4 rounded`}
                >
                  {isSaved ? "Saved" : "Save to Portfolio"}
                </button>
                <button
                  onClick={handleReset}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                >
                  New Form
                </button>
              </div>
              <button
                onClick={() => navigate("/PublicPortfolio")}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
              >
                View Public Portfolio
              </button>
            </div>
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
