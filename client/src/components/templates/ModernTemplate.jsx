import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

const dummyData = {
  name: "John Doe",
  email: "john.doe@example.com",
  linkedin: "https://linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
  bio: "A dedicated software developer with experience in modern web technologies.",
  skills: ["JavaScript", "React", "Node.js", "MongoDB", "Git", "Tailwind CSS"],
  projects: [
    {
      name: "Task Tracker",
      description: "A web app to manage daily tasks with reminders.",
    },
    {
      name: "Weather Wizard",
      description:
        "A React-based app that shows weather forecasts using OpenWeather API.",
    },
  ],
};

export default function ModernTemplate() {
  return (
    <Card className="max-w-3xl mx-auto mt-10 p-8 rounded-2xl shadow-xl bg-white text-gray-800">
      <CardContent>
        <h1 className="text-4xl font-bold text-purple-700">{dummyData.name}</h1>
        <p className="text-sm mt-1">{dummyData.email}</p>
        <p className="text-sm">{dummyData.linkedin}</p>
        <p className="text-sm mb-4">{dummyData.github}</p>

        <Separator className="my-4" />

        <h2 className="text-xl font-semibold text-purple-700">About Me</h2>
        <p className="mb-4">{dummyData.bio}</p>

        <h2 className="text-xl font-semibold text-purple-700">Skills</h2>
        <ul className="flex flex-wrap gap-2 mb-4">
          {dummyData.skills.map((skill, idx) => (
            <li
              key={idx}
              className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold text-purple-700">Projects</h2>
        <ul className="list-disc ml-5 space-y-2">
          {dummyData.projects.map((project, idx) => (
            <li key={idx}>
              <span className="font-medium">{project.name}:</span>{" "}
              {project.description}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
