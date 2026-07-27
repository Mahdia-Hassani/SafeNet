import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import LessonCard from "../components/learning/LessonCard";
import lessons from "../data/lesson";

import { Search, BookOpen, CheckCircle, PlayCircle } from "lucide-react";

import { getCompletedLessonsCount } from "../utils/learningStorage";

function LearningCenter() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const completedCourses = getCompletedLessonsCount();

  const inProgressCourses = lessons.filter(
    (lesson) => lesson.progress > 0 && lesson.progress < 100,
  ).length;

  const categories = [
    "All",
    "Email Security",
    "Account Safety",
    "Web Safety",
    "Human Risk",
  ];

  const filteredLessons = lessons.filter((lesson) => {
    const searchMatch = lesson.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch = category === "All" || lesson.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <DashboardLayout>
      <div className="space-y-10">
        {/* Header */}

        <section>
          <h1 className="text-4xl font-bold">Learning Center</h1>

          <p className="mt-3 text-text-secondary">
            Learn cybersecurity through interactive lessons and practical
            examples.
          </p>
        </section>

        {/* Statistics */}

        <section
          className="
          flex
          flex-wrap
          gap-10
          "
        >
          <div className="flex items-center gap-3">
            <BookOpen size={26} className="text-primary" />

            <div>
              <p className="text-2xl font-bold">{lessons.length}</p>

              <span className="text-sm text-text-secondary">
                Courses Enrolled
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle size={26} className="text-primary" />

            <div>
              <p className="text-2xl font-bold">{completedCourses}</p>

              <span className="text-sm text-text-secondary">
                Courses Completed
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <PlayCircle size={26} className="text-primary" />

            <div>
              <p className="text-2xl font-bold">{inProgressCourses}</p>

              <span className="text-sm text-text-secondary">
                Courses In Progress
              </span>
            </div>
          </div>
        </section>

        {/* Search + Categories */}

        <section
          className="
          flex
          flex-col
          gap-6
          lg:flex-row
          lg:items-center
          lg:justify-between
          "
        >
          {/* Categories */}

          <div
            className="
            flex
            flex-wrap
            gap-6
            "
          >
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`
                
                relative
                pb-2
                text-sm
                font-medium
                transition

                ${
                  category === item
                    ? "text-primary after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-primary"
                    : "text-text-secondary hover:text-text-primary"
                }

                `}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Search */}

          <div className="relative w-full lg:w-80">
            <Search
              size={18}
              className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-text-secondary
              "
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses..."
              className="
              w-full
              border
              border-border
              bg-surface
              py-3
              pl-10
              pr-4
              text-sm
              outline-none
              focus:border-primary
              "
            />
          </div>
        </section>

        {/* Courses */}

        <section>
          <h2 className="mb-6 text-2xl font-bold">Popular Courses</h2>

          <div
            className="
            grid
            gap-8
            sm:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
            "
          >
            {filteredLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default LearningCenter;
