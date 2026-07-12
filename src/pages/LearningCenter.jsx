import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import LessonCard from "../components/learning/LessonCard";
import lessons from "../data/lesson";

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
          <h1 className="text-3xl font-bold">Learning Center 📚</h1>

          <p className="mt-2 text-slate-500">
            Improve your cybersecurity knowledge through interactive lessons.
          </p>
        </div>

        {/* Search */}

        <input
          type="text"
          placeholder="Search lessons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            p-4
            outline-none
            focus:border-blue-500
          "
        />

        {/* Categories */}

        <div className="flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`
                rounded-full
                px-4
                py-2
                text-sm
                transition
                ${
                  category === item
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Lessons */}

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {filteredLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default LearningCenter;
