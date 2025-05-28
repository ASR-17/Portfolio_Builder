import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import SkillsInput from "./SkillsInput";

const initialFormData = {
  name: "",
  email: "",
  linkedin: "",
  github: "",
  bio: "",
  projects: [{ name: "", description: "" }],
};

export default function PortfolioForm({ onSubmit }) {
  const [formData, setFormDataLocal] = useState(initialFormData);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleChange = (e, index = null, field = null) => {
    const { name, value } = e.target;

    if (index !== null && field) {
      const updatedProjects = [...formData.projects];
      updatedProjects[index][field] = value;
      setFormDataLocal((prev) => ({ ...prev, projects: updatedProjects }));
    } else {
      setFormDataLocal((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addProject = () =>
    setFormDataLocal((prev) => ({
      ...prev,
      projects: [...prev.projects, { name: "", description: "" }],
    }));

  const handleReset = () => {
    setFormDataLocal(initialFormData);
    setSelectedSkills([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const completeData = {
      ...formData,
      skills: selectedSkills,
    };
    if (onSubmit) onSubmit(completeData); // Call parent handler
  };

  const commonInputStyle = "bg-white text-purple-700";

  return (
    <Card className="max-w-3xl mx-auto mt-10 p-6 rounded-2xl shadow-md bg-gradient-to-br from-purple-700 to-green-800 text-white">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            {
              label: "Name",
              name: "name",
              type: "text",
              required: true,
              placeholder: "Enter your full name",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              required: true,
              placeholder: "Enter your email address",
            },
            {
              label: "LinkedIn Profile URL",
              name: "linkedin",
              type: "text",
              required: true,
              placeholder: "https://linkedin.com/in/your-profile",
            },
            {
              label: "GitHub Profile URL",
              name: "github",
              type: "text",
              required: true,
              placeholder: "https://github.com/your-username",
            },
          ].map(({ label, name, type, required, placeholder }) => (
            <div key={name}>
              <label className="text-lg font-medium">
                {label}
                {required && <span className="text-red-500">*</span>}
              </label>
              <Input
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                required={required}
                placeholder={placeholder}
                className={commonInputStyle}
              />
            </div>
          ))}

          {/* Bio Input */}
          <div>
            <label className="text-lg font-medium">
              Bio / Summary<span className="text-red-500">*</span>
            </label>
            <Textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Briefly describe yourself or your career goals"
              className={commonInputStyle}
            />
          </div>

          {/* Skills Input */}
          <div>
            <SkillsInput
              selectedSkills={selectedSkills}
              setSelectedSkills={setSelectedSkills}
            />
          </div>

          {/* Projects Section */}
          <div>
            <label className="text-lg font-medium">Projects</label>
            {formData.projects.map((project, index) => (
              <div key={index} className="space-y-2 mt-2">
                <Input
                  placeholder="Project Name"
                  value={project.name}
                  onChange={(e) => handleChange(e, index, "name")}
                  className={commonInputStyle}
                />
                <Textarea
                  placeholder="Project Description"
                  value={project.description}
                  onChange={(e) => handleChange(e, index, "description")}
                  rows={2}
                  className={commonInputStyle}
                />
              </div>
            ))}
            <Button type="button" onClick={addProject} className="mt-2">
              + Add Another Project
            </Button>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button type="submit">Submit</Button>
            <Button type="button" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
