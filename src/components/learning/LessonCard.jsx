import { Clock, ArrowRight } from "lucide-react";

function LessonCard({ lesson }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        transition
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      {/* Image Placeholder */}

      <div
        className="
          flex
          h-44
          items-center
          justify-center
          bg-slate-100
          text-sm
          text-slate-400
        "
      >
        Course Image
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold">{lesson.title}</h3>

        <p className="mt-2 text-sm text-slate-500">{lesson.description}</p>

        <div className="mt-5 flex items-center gap-3">
          <span
            className="
              rounded-full
              bg-blue-50
              px-3
              py-1
              text-xs
              text-blue-600
            "
          >
            {lesson.level}
          </span>

          <span
            className="
              flex
              items-center
              gap-1
              text-xs
              text-slate-500
            "
          >
            <Clock size={14} />
            {lesson.duration}
          </span>
        </div>

        <p className="mt-4 text-xs text-slate-400">{lesson.category}</p>

        <button
          className="
            mt-6
            flex
            items-center
            gap-2
            text-sm
            font-medium
            text-blue-600
          "
        >
          Start Course
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default LessonCard;
