import React, { useEffect, useState } from "react";
import ModernTheme from "../components/themes/ModernTheme";
import ClassicTheme from "../components/themes/ClassicTheme";

const PublicPortfolio = () => {
  const [resumeList, setResumeList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const storedList = localStorage.getItem("portfolioList");
    if (storedList) {
      try {
        setResumeList(JSON.parse(storedList));
      } catch (err) {
        console.error("❌ Error parsing portfolioList:", err);
      }
    }
  }, []);

  const getThemeComponent = (resume) => {
    const theme = resume.theme || "modern";
    const themes = {
      modern: <ModernTheme data={resume} />,
      classic: <ClassicTheme data={resume} />,
    };

    return themes[theme] || (
      <div className="text-red-500 text-center">Invalid theme selected</div>
    );
  };

  const handleNext = () => {
    if (currentIndex < resumeList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!resumeList || resumeList.length === 0) {
    return (
      <div className="text-center mt-24 text-lg text-red-600 font-semibold">
        No resumes found. Please create your resume from the Dashboard.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-purple-800 mb-8">
        Public Portfolio
      </h2>

      <div className="w-full max-w-6xl mb-4">
        {getThemeComponent(resumeList[currentIndex])}
      </div>

      <div className="flex justify-center gap-6 mt-4">
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            ⬅ Prev
          </button>
        )}

        {currentIndex < resumeList.length - 1 && (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Next ➡
          </button>
        )}
      </div>
    </div>
  );
};

export default PublicPortfolio;
