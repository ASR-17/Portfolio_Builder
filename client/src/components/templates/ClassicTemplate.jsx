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

export default function ClassicTemplate() {
  return (
    <Card className="max-w-3xl mx-auto mt-10 p-6 rounded-md shadow border bg-gray-50 text-black">
      <CardContent>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">{dummyData.name}</h1>
          <p>
            {dummyData.email} | {dummyData.linkedin} | {dummyData.github}
          </p>
        </div>

        <Separator className="my-4" />

        <div className="mb-4">
          <h2 className="text-lg font-semibold underline">
            Professional Summary
          </h2>
          <p>{dummyData.bio}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold underline">Skills</h2>
          <ul className="list-disc ml-5">
            {dummyData.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold underline">Projects</h2>
          {dummyData.projects.map((project, idx) => (
            <div key={idx} className="mt-2">
              <strong>{project.name}</strong>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
