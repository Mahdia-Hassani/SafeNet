import { CheckCircle, PlayCircle, Lock } from "lucide-react";

function Curriculum({ lesson }) {
  const curriculum = lesson.curriculum || [
    {
      title: "Introduction",
      duration: "5 min",
      completed: true,
    },
    {
      title: "Main Lesson",
      duration: "12 min",
      completed: false,
    },
    {
      title: "Summary",
      duration: "4 min",
      completed: false,
    },
  ];

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">Course Curriculum</h2>

      <div className="space-y-4">
        {curriculum.map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              p-5
              transition
              hover:border-blue-200
              hover:bg-slate-50
            "
          >
            <div className="flex items-center gap-4">
              {item.completed ? (
                <CheckCircle size={22} className="text-green-600" />
              ) : (
                <PlayCircle size={22} className="text-blue-600" />
              )}

              <div>
                <h3 className="font-semibold">{item.title}</h3>

                <p className="text-sm text-slate-500">{item.duration}</p>
              </div>
            </div>
            ~{!item.completed && <Lock size={18} className="text-slate-400" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Curriculum;
