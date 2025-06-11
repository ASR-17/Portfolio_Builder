import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PreviewCard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("portfolioData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  if (!data) {
    return (
      <div className="text-center text-gray-500 py-10 text-lg">
        No data found. Please fill the form first.
      </div>
    );
  }

  const {
    name,
    email,
    linkedin,
    github,
    bio,
    skills = [],
    projects = [],
  } = data;

  const filteredProjects = projects.filter(
    (p) => p.name.trim() || p.description.trim()
  );

  return (
    <Card className="mt-10 w-full max-w-3xl mx-auto rounded-2xl p-6 shadow-xl bg-gradient-to-br from-purple-50 via-green-50 to-blue-100">
      <CardHeader>
        {name && (
          <CardTitle className="text-3xl font-bold text-purple-800">
            {name}
          </CardTitle>
        )}
      </CardHeader>

      <CardContent className="space-y-4 text-gray-800">
        {bio && <p className="text-base italic">{bio}</p>}

        <div className="text-sm space-y-1">
          {email && (
            <p>
              <strong>Email:</strong> {email}
            </p>
          )}
          {linkedin && (
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href={linkedin}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkedin}
              </a>
            </p>
          )}
          {github && (
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href={github}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {github}
              </a>
            </p>
          )}
        </div>

        {skills.length > 0 && (
          <div>
            <h3 className="font-semibold mt-4 mb-1 text-purple-700">Skills:</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-purple-400 to-green-400 text-white px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length > 0 && (
          <div>
            <h3 className="font-semibold mt-4 mb-1 text-purple-700">Projects:</h3>
            <ul className="list-disc list-inside space-y-2">
              {filteredProjects.map((project, index) => (
                <li key={index}>
                  {project.name && (
                    <p className="font-medium">{project.name}</p>
                  )}
                  {project.description && (
                    <p className="text-sm text-gray-600">{project.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PreviewCard;
