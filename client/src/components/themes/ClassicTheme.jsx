// themes/ClassicTheme.jsx
import { Card, CardContent } from ".././ui/card";
import { Separator } from ".././ui/separator";

export default function ClassicTheme({ data }) {
  if (!data) return null;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 rounded-md shadow border bg-gray-50 text-black">
      <Card>
        <CardContent>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <p>
              {data.email} | {data.linkedin} | {data.github}
            </p>
          </div>

          <Separator className="my-4" />

          <div className="mb-4">
            <h2 className="text-lg font-semibold underline">Professional Summary</h2>
            <p>{data.bio}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold underline">Skills</h2>
            <ul className="list-disc ml-5">
              {data.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold underline">Projects</h2>
            {data.projects.map((project, idx) => (
              <div key={idx} className="mt-2">
                <strong>{project.name}</strong>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
