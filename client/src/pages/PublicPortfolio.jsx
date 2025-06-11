// pages/PublicPortfolio.jsx
import React from "react";
import ModernTheme from "../components/themes/ModernTheme";
import ClassicTheme from "../components/themes/ClassicTheme";

const PublicPortfolio = () => {
  let resumeData = null;
  let selectedTheme = null;

  try {
    const storedData = localStorage.getItem("resumeData");
    resumeData = storedData ? JSON.parse(storedData) : null;
    selectedTheme = localStorage.getItem("selectedTheme");
  } catch (error) {
    console.error("Error parsing resume data from localStorage:", error);
  }

  if (!resumeData || !selectedTheme) {
    return (
      <div className="text-center mt-20 text-red-600 text-lg font-semibold">
        Missing resume data or theme. Please fill out your profile from the Dashboard.
      </div>
    );
  }

  const themes = {
    modern: <ModernTheme data={resumeData} />,
    classic: <ClassicTheme data={resumeData} />,
  };

  return themes[selectedTheme] || (
    <div className="text-center mt-20 text-red-600 text-lg font-semibold">
      Invalid theme selected. Please choose a valid theme.
    </div>
  );
};

export default PublicPortfolio;
