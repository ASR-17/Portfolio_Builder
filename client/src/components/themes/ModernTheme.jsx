// themes/ModernTheme.jsx
import { Card, CardContent } from ".././ui/card";
import { Separator } from ".././ui/separator";

export default function ModernTheme({ data }) {
  if (!data) return null;

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 rounded-md shadow border bg-gray-50 text-black">
      <Card className="p-8 rounded-2xl shadow-xl bg-white text-gray-800">
        <CardContent>
          <h1 className="text-4xl font-bold text-purple-700">{data.name}</h1>
          <p className="text-sm mt-1">{data.email}</p>
          <p className="text-sm">{data.linkedin}</p>
          <p className="text-sm mb-4">{data.github}</p>

          <Separator className="my-4" />

          <h2 className="text-xl font-semibold text-purple-700">About Me</h2>
          <p className="mb-4">{data.bio}</p>

          <h2 className="text-xl font-semibold text-purple-700">Skills</h2>
          <ul className="flex flex-wrap gap-2 mb-4">
            {data.skills.map((skill, idx) => (
              <li key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-purple-700">Projects</h2>
          <ul className="list-disc ml-5 space-y-2">
            {data.projects.map((project, idx) => (
              <li key={idx}>
                <span className="font-medium">{project.name}:</span> {project.description}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
