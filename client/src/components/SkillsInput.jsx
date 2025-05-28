import { useState } from "react";
import skillsData from "./data/skills.json";
import { gradient } from './../../node_modules/tailwindcss/src/util/dataTypes';

export default function SkillsInput({ selectedSkills, setSelectedSkills }) {
  const [query, setQuery] = useState("");

  const handleAddSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setQuery("");
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skillToRemove));
  };

  const filteredSkills =
    query.length > 0
      ? skillsData.skills.filter(
          (skill) =>
            skill.toLowerCase().includes(query.toLowerCase()) &&
            !selectedSkills.includes(skill)
        )
      : [];

  return (
    <div className="w-full">
      <label className="block text-lg font-medium mb-2 text-white">Select Skills</label>

      {/* Input Box */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Start typing a skill..."
        className="w-full p-2 rounded-md border bg-white text-purple-700 focus:outline-none"
      />

      {/* Suggestions */}
      {filteredSkills.length > 0 && (
        <div className="mt-1 max-h-40 overflow-y-auto bg-white shadow rounded-md z-10 relative">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              onClick={() => handleAddSkill(skill)}
              className="cursor-pointer px-4 py-2 hover:bg-purple-100 text-sm text-gray-700"
            >
              {skill}
            </div>
          ))}
        </div>
      )}

      {/* Selected Skills Tags */}
      {selectedSkills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {selectedSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-blue-500 to-green-500 text-purple-900 px-3 py-1 rounded-full text-sm flex items-center justify-between shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              {skill}
              <button
                onClick={() => handleRemoveSkill(skill)}
                className="ml-2 text-white hover:text-gray-300"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
