import { useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import CourseHero from "../components/course/CourseHero";
import CourseTabs from "../components/course/CourseTabs";
import Curriculum from "../components/course/Curriculum";
import Resources from "../components/course/Resources";
import Quiz from "../components/course/Quiz";

import lessons from "../data/lesson";

function CourseDetails() {
  const { id } = useParams();

  const lesson = lessons.find((lesson) => lesson.id === Number(id));

  const [activeTab, setActiveTab] = useState("curriculum");

  if (!lesson) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Course Not Found</h2>

            <p className="mt-2 text-slate-500">
              The requested course could not be found.
            </p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-7xl space-y-8 px-6 py-8">
        {/* Hero */}
        <CourseHero lesson={lesson} />

        {/* Tabs */}
        <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content */}
        {activeTab === "curriculum" && <Curriculum lesson={lesson} />}

        {activeTab === "resources" && <Resources lesson={lesson} />}

        {activeTab === "quiz" && <Quiz lesson={lesson} />}
      </div>
    </DashboardLayout>
  );
}

export default CourseDetails;
