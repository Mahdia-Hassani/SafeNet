import { Clock3, BookOpen, Play } from "lucide-react";

function CourseHero({ lesson }) {
  return (
    <section
      className="
        grid
        items-center
        gap-10
        lg:grid-cols-2
      "
    >
      {/* Course Image */}

      <div
        className="
          h-[240px]
          sm:h-[320px]
          lg:h-[380px]
          w-full
          overflow-hidden
          bg-surface
          shadow-[0_8px_20px_rgba(0,0,0,0.12)]
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
              object-center
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

      <div
        className="
          max-w-xl
        "
      >
        <h1
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            leading-tight
            text-text-primary
          "
        >
          {lesson.title}
        </h1>

        <p
          className="
            mt-5
            text-base
            leading-7
            text-text-secondary
          "
        >
          {lesson.description}
        </p>

        {/* Course Info */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-8
            text-sm
            text-text-secondary
          "
        >
          <div className="flex items-center gap-2">
            <Clock3 size={18} className="text-primary" />

            <span>{lesson.duration || "2 Hours"}</span>
          </div>

          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-primary" />

            <span>{lesson.lessons || 5} Lessons</span>
          </div>
        </div>

        {/* Button */}

        <button
          className="
            mt-8
            flex
            items-center
            gap-3
            bg-primary
            px-7
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
