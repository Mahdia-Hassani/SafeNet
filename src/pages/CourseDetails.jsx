import { useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import lessons from "../data/lesson";
import { completeLesson } from "../utils/learningStorage";

function CourseDetails() {
  const { id } = useParams();

  const lesson = lessons.find((item) => item.id === Number(id));

  function handleComplete() {
    completeLesson(lesson.id);

    alert("Lesson completed!");
  }

  if (!lesson) {
    return (
      <DashboardLayout>
        <p>Course not found.</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl">
        {/* Image Placeholder */}

        <div
          className="
            h-72
            rounded-2xl
            bg-slate-100
          "
        />

        {/* Title */}

        <h1 className="mt-8 text-3xl font-bold">{lesson.title}</h1>

        {/* Description */}

        <p className="mt-4 text-slate-500">{lesson.description}</p>

        {/* Content */}

        <div className="mt-8 rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Course Content</h2>

          <p className="mt-4 text-slate-600">{lesson.content}</p>
        </div>

        {/* Complete Button */}

        <button
          onClick={handleComplete}
          className="
            mt-6
            rounded-xl
            bg-blue-600
            px-5
            py-3
            text-white
            transition
            hover:bg-blue-700
          "
        >
          Complete Course
        </button>
      </div>
    </DashboardLayout>
  );
}

export default CourseDetails;
