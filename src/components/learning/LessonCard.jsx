import { Clock, ArrowRight, BookOpen, BarChart3 } from "lucide-react";

import { useNavigate } from "react-router-dom";

function LessonCard({ lesson }) {
  const navigate = useNavigate();

  // بعداً این مقدار از LocalStorage یا Supabase می‌آید
  const progress = lesson.progress || 0;

  return (
    <div
      onClick={() => navigate(`/learning/${lesson.id}`)}
      className="
        group
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        cursor-pointer
      "
    >
      {/* Image */}

      <div className="relative">
        <div
          className="
            flex
            h-56
            items-center
            justify-center
            bg-slate-100
          "
        >
          <img
            src={lesson.image}
            alt={lesson.title}
            className="
                  h-56
                  w-full
                  object-cover
              "
          />
        </div>

        {/* Level Badge */}

        <span
          className="
            absolute
            left-5
            top-5
            rounded-full
            bg-white
            px-3
            py-1
            text-xs
            font-medium
            text-blue-600
            shadow
          "
        >
          {lesson.level}
        </span>
      </div>

      {/* Content */}

      <div className="space-y-5 p-6">
        <div>
          <h3
            className="
              text-xl
              font-semibold
              transition
              group-hover:text-blue-600
            "
          >
            {lesson.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {lesson.description}
          </p>
        </div>

        {/* Meta */}

        <div className="flex flex-wrap gap-5 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Clock size={16} />

            {lesson.duration}
          </div>

          <div className="flex items-center gap-2">
            <BookOpen size={16} />
            {lesson.lessons} Lessons
          </div>
        </div>

        {/* Category */}

        <div className="text-sm text-slate-400">{lesson.category}</div>

        {/* Progress */}

        <div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 size={15} className="text-blue-600" />

              <span className="text-sm font-medium">Progress</span>
            </div>

            <span className="text-sm font-semibold text-blue-600">
              {progress}%
            </span>
          </div>

          <div className="h-2 rounded-full bg-slate-200">
            <div
              className="h-2 rounded-full bg-blue-600 transition-all"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* Button */}

        <button
          className="
            flex
            items-center
            gap-2
            font-semibold
            text-blue-600
            transition
            group-hover:gap-3
          "
        >
          {progress > 0 ? "Continue Learning" : "Start Course"}

          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default LessonCard;
