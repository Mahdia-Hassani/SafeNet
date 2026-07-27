import { Clock, ArrowRight, BookOpen, BarChart3 } from "lucide-react";

import { useNavigate } from "react-router-dom";

function LessonCard({ lesson }) {
  const navigate = useNavigate();

  const progress = lesson.progress || 0;

  return (
    <article
      onClick={() => navigate(`/learning/${lesson.id}`)}
      className="
        group
        overflow-hidden
        rounded-1xl
        bg-card
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Course Image */}

      <div className="relative overflow-hidden">
        <img
          src={lesson.image}
          alt={lesson.title}
          className="
            h-52
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-background/80
            px-3
            py-1
            text-xs
            font-medium
            text-text-primary
            backdrop-blur
          "
        >
          {lesson.level}
        </span>
      </div>

      {/* Content */}

      <div className="space-y-5 p-6">
        {/* Category + Duration */}

        <div className="flex items-center justify-between">
          <span
            className="
              rounded-full
              bg-primary/10
              px-3
              py-1
              text-xs
              font-medium
              text-primary
            "
          >
            {lesson.category}
          </span>

          <div className="flex items-center gap-1 text-sm text-text-secondary">
            <Clock size={15} />

            {lesson.duration}
          </div>
        </div>

        {/* Title */}

        <div>
          <h3
            className="
              text-xl
              font-semibold
              text-text-primary
              transition-colors
              group-hover:text-primary
            "
          >
            {lesson.title}
          </h3>

          <p
            className="
              mt-3
              line-clamp-3
              text-sm
              leading-6
              text-text-secondary
            "
          >
            {lesson.description}
          </p>
        </div>

        {/* Lessons */}

        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            text-text-secondary
          "
        >
          <BookOpen size={16} />
          {lesson.lessons} Lessons
        </div>

        {/* Progress */}

        <div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 size={15} className="text-primary" />

              <span className="text-sm font-medium text-text-primary">
                Progress
              </span>
            </div>

            <span className="text-sm font-semibold text-primary">
              {progress}%
            </span>
          </div>

          <div className="h-2 rounded-full bg-background">
            <div
              className="
                h-2
                rounded-full
                bg-primary
                transition-all
                duration-500
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* Footer */}

        <div
          className="
            flex
            items-center
            justify-between
            pt-2
          "
        >
          <button
            className="
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-primary
              transition-all
              group-hover:gap-3
            "
          >
            {progress > 0 ? "Continue" : "Start Course"}

            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default LessonCard;
