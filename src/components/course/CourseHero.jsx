import { Clock3, BookOpen, Play } from "lucide-react";

function CourseHero({ lesson }) {
  return (
    <section
      className="
        grid
        gap-8
        lg:grid-cols-2
        items-center
      "
    >
      {/* Image */}

      <div
        className="
          h-[280px]
          sm:h-[360px]
          lg:h-[420px]
          overflow-hidden
          bg-surface
          shadow-[0_8px_25px_rgba(0,0,0,0.08)]
        "
      >
        {lesson.image ? (
          <img
            src={lesson.image}
            alt={lesson.title}
            className="
              h-full
              w-full
              object-cover
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              items-center
              justify-center
              text-text-secondary
            "
          >
            Course Image
          </div>
        )}
      </div>

      {/* Content */}

      <div>
        <h1
          className="
            text-3xl
            sm:text-4xl
            font-bold
            text-text-primary
          "
        >
          {lesson.title}
        </h1>

        <p
          className="
            mt-5
            leading-7
            text-text-secondary
          "
        >
          {lesson.description}
        </p>

        {/* Info */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-6
            text-sm
            text-text-secondary
          "
        >
          <div className="flex items-center gap-2">
            <Clock3 size={18} />
            {lesson.duration || "2 Hours"}
          </div>

          <div className="flex items-center gap-2">
            <BookOpen size={18} />
            {lesson.lessons || 5} Lessons
          </div>
        </div>

        <button
          className="
            mt-8
            flex
            items-center
            gap-2
            bg-primary
            px-8
            py-3
            text-white
            shadow-sm
            transition
            hover:bg-primary-hover
          "
        >
          <Play size={18} />
          Continue Lesson
        </button>
      </div>
    </section>
  );
}

export default CourseHero;
