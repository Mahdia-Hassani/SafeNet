import { Clock3, BookOpen, BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CourseHero({ lesson }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      {/* Image */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <img
          src={lesson.image}
          alt={lesson.title}
          className="h-full min-h-[320px] w-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-center rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-blue-600">SafeNet Academy</p>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          {lesson.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <BadgeCheck size={16} />
            {lesson.level}
          </span>

          <span className="flex items-center gap-2">
            <Clock3 size={16} />
            {lesson.duration}
          </span>

          <span className="flex items-center gap-2">
            <BookOpen size={16} />
            {lesson.lessons} Lessons
          </span>
        </div>

        <p className="mt-5 max-w-xl leading-7 text-slate-600">
          {lesson.description}
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate(`/learning/${lesson.id}`)}
            className="
    rounded-xl
    bg-blue-600
    px-6
    py-3
    font-medium
    text-white
    transition
    hover:bg-blue-700
  "
          >
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseHero;
