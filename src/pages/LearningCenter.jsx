import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import LessonCard from "../components/learning/LessonCard";
import lessons from "../data/lesson";

import { Search, Star, Clock3, BookOpen } from "lucide-react";

function LearningCenter() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Email Security",
    "Account Safety",
    "Web Safety",
    "Human Risk",
  ];

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch = lesson.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || lesson.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}

        <div>
          <h1 className="text-4xl font-bold">Learning Center </h1>

          <p className="mt-2 text-slate-500">
            Learn cybersecurity through interactive lessons and practical
            examples.
          </p>
        </div>

        {/* Search */}

        <div className="relative">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="
              w-full
              rounded-2xl
              bg-white
              py-4
              pl-14
              pr-6
              shadow-sm
              outline-none
              transition
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>

        {/* Categories */}

        <div className="flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`
                rounded-full
                px-5
                py-2.5
                transition

                ${
                  category === item
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white shadow-sm hover:shadow"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Featured Course */}

        <div
          className="
            overflow-hidden
            rounded-3xl
            bg-white
            shadow-sm
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}

            <div
              className="
                flex
                min-h-[320px]
                items-center
                justify-center
                bg-slate-100
              "
            >
              <span className="text-slate-400">Course Image</span>
            </div>

            {/* Content */}

            <div className="p-8">
              <span
                className="
                  rounded-full
                  bg-blue-100
                  px-4
                  py-1
                  text-sm
                  text-blue-600
                "
              >
                Featured
              </span>

              <h2 className="mt-4 text-3xl font-bold">Phishing Awareness</h2>

              <p className="mt-3 text-slate-600">
                Learn how phishing attacks work, recognize warning signs and
                protect yourself from online scams.
              </p>

              <div className="mt-6 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-500" size={18} />
                  Beginner
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={18} />2 Hours
                </div>

                <div className="flex items-center gap-2">
                  <BookOpen size={18} />5 Lessons
                </div>
              </div>

              {/* Progress */}

              <div className="mt-8">
                <div className="mb-2 flex justify-between">
                  <span>Progress</span>

                  <span>70%</span>
                </div>

                <div className="h-3 rounded-full bg-slate-200">
                  <div
                    className="
                      h-3
                      w-[70%]
                      rounded-full
                      bg-blue-600
                    "
                  />
                </div>
              </div>

              <button
                className="
                  mt-8
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Continue Learning →
              </button>
            </div>
          </div>
        </div>

        {/* Courses */}

        <div>
          <h2 className="mb-6 text-2xl font-bold">Popular Courses</h2>

          <div
            className="
              grid
              gap-8
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {filteredLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default LearningCenter;
