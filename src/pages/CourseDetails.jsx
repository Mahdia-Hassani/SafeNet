import { useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import CourseHero from "../components/course/CourseHero";
import CourseTabs from "../components/course/CourseTabs";
import Curriculum from "../components/course/Curriculum";
import Resources from "../components/course/Resources";
import Notes from "../components/course/Notes";

import lessons from "../data/lesson";

function CourseDetails() {
  const { id } = useParams();

  const lesson = lessons.find((lesson) => lesson.id === Number(id));

  const [activeTab, setActiveTab] = useState("curriculum");

  if (!lesson) {
    return (
      <DashboardLayout>
        <div
          className="
            min-h-[60vh]
            flex
            items-center
            justify-center
            px-6
          "
        >
          <div className="text-center">
            <h2
              className="
                text-3xl
                font-bold
                text-text-primary
              "
            >
              Course Not Found
            </h2>

            <p
              className="
                mt-3
                text-text-secondary
              "
            >
              The requested course could not be found.
            </p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <main
        className="
          w-full
          px-4
          py-6

          sm:px-6

          lg:px-8
        "
      >
        <div
          className="
            space-y-10
          "
        >
          {/* Hero Section */}

          <CourseHero lesson={lesson} />

          {/* Tabs */}

          <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Content Area */}

          <div
            className="
              min-h-[400px]
            "
          >
            {activeTab === "curriculum" && <Curriculum lesson={lesson} />}

            {activeTab === "resources" && <Resources lesson={lesson} />}

            {activeTab === "notes" && <Notes lesson={lesson} />}
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}

export default CourseDetails;
