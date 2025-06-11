import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import { Button } from "@/components/ui/button";
import PublicPortfolio from './../pages/PublicPortfolio';

const templates = [
  {
    name: "modern",
    component: <ModernTemplate />,
  },
  {
    name: "classic",
    component: <ClassicTemplate />,
  },
];

const ThemeSelection = ({ onSubmitTheme }) => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const navigate = useNavigate();

  const handleSelect = (themeName) => {
    setSelectedTheme(themeName);
  };

  const handleSubmit = () => {
    if (!selectedTheme) return;

    // Save theme to localStorage
    localStorage.setItem("selectedTheme", selectedTheme);

    // Notify parent (if passed)
    if (onSubmitTheme) {
      onSubmitTheme(selectedTheme);
    }

    // Navigate based on resume data
    const resumeData = localStorage.getItem("resumeData");
    if (resumeData) {
      navigate("/portfolio/:id");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-10">
        Choose Your Resume Template
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {templates.map((tpl) => (
          <div
            key={tpl.name}
            className={`border rounded-2xl p-4 transition cursor-pointer ${
              selectedTheme === tpl.name
                ? "ring-4 ring-purple-600 shadow-xl"
                : "hover:shadow-md"
            }`}
            onClick={() => handleSelect(tpl.name)}
          >
            <h3 className="text-xl font-semibold capitalize text-center">
              {tpl.name} Theme
            </h3>
            <div className="bg-white p-4 rounded-xl h-[60vh] overflow-y-auto">
              {tpl.component}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button
          onClick={handleSubmit}
          disabled={!selectedTheme}
          className={`px-8 py-3 text-lg font-semibold text-white rounded-full ${
            selectedTheme
              ? "bg-gradient-to-r from-purple-400 to-green-400"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit Theme
        </Button>
      </div>
    </div>
  );
};

export default ThemeSelection;
