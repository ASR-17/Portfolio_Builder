import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PreviewCard = () => {
  const data = {
    name: "Aditya Singh",
    email: "aditya@example.com",
    phone: "123-456-7890",
    linkedin: "https://linkedin.com/in/aditya",
    github: "https://github.com/aditya",
    bio: "Passionate Full Stack Developer with a love for solving real-world problems.",
    skills: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
    projects: [
      {
        title: "AI Resume Matcher",
        description: "A tool that parses resumes and matches them with the most relevant job descriptions using NLP and machine learning.",
      },
      {
        title: "Virtual Study Room",
        description: "A real-time collaborative platform for students with video chat, shared whiteboards, and note-taking capabilities.",
      },
      {
        title: "Gamified Learning Platform",
        description: "A fun coding platform where users level up by completing challenges and projects, earning XP and badges.",
      },
    ],
  };

  return (
    <Card className="mt-10 w-full max-w-3xl mx-auto rounded-2xl p-6 shadow-xl bg-gradient-to-br from-purple-50 via-green-50 to-blue-100">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-purple-800">{data.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-800">
        <p className="text-base italic">{data.bio}</p>

        <div className="text-sm">
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>LinkedIn:</strong> <a href={data.linkedin} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{data.linkedin}</a></p>
          <p><strong>GitHub:</strong> <a href={data.github} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{data.github}</a></p>
        </div>

        <div>
          <h3 className="font-semibold mt-4 mb-1 text-purple-700">Skills:</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-purple-400 to-green-400 text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mt-4 mb-1 text-purple-700">Projects:</h3>
          <ul className="list-disc list-inside space-y-2">
            {data.projects.map((project, index) => (
              <li key={index}>
                <p className="font-medium">{project.title}</p>
                <p className="text-sm text-gray-700">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Instructions & Button */}
        <div className="mt-6 text-center">
          <p className="text-base font-medium text-gray-700 mb-3">
            ✅ Check out your details and click on the <span className="text-purple-700 font-semibold">Finish</span> button
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-600 hover:to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md transition">
            Finish
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PreviewCard;
