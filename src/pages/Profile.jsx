import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import lessons from "../data/lesson";
import useAnalyses from "../hooks/useAnalyses";

import {
  getCompletedLessonsCount,
  getLearningProgress,
} from "../utils/learningStorage";
import { getCompletedQuizzesCount } from "../utils/quizStorage";
import { calculateSafetyScore } from "../utils/calculateSafetyScore";
import { getAchievements } from "../utils/achievementUtils";

import {
  BookOpen,
  Award,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

function Profile() {
  const [activeTab, setActiveTab] = useState("courses");
  const analyses = useAnalyses();

  const completedLessons = getCompletedLessonsCount();

  const completedQuizzes = getCompletedQuizzesCount();

  const learningProgress = getLearningProgress(lessons.length);

  const safetyScore = calculateSafetyScore(analyses);

  const completedLessonIds =
    JSON.parse(localStorage.getItem("safenet_completed_lessons")) || [];

  const completedCourses = lessons.filter((lesson) =>
    completedLessonIds.includes(lesson.id),
  );

  const recentAnalysis =
    analyses.length > 0 ? analyses[analyses.length - 1] : null;

  const achievements = getAchievements({
    completedLessons,
    completedQuizzes,
    analyses: analyses.length,
  });

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Top Section */}

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Card */}

          <div
            className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
    "
          >
            <div className="flex flex-col items-center text-center">
              <img
                src="/Avatar.jpg"
                alt="Avatar"
                className="
                      h-28
                      w-28
                      rounded-full
                      object-cover
                      border-4
                      border-white
                      shadow-md
                    "
              />

              <h1 className="mt-4 text-2xl font-bold">Ali</h1>

              <p className="text-slate-500">Cybersecurity Learner</p>
            </div>
          </div>

          {/* Statistics */}

          <div
            className="
      lg:col-span-2
      rounded-3xl
      bg-white
      p-6
      shadow-sm
    "
          >
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <Stat
                icon={<BookOpen size={20} />}
                title="Lessons"
                value={completedLessons}
              />

              <Stat
                icon={<ShieldCheck size={20} />}
                title="Quizzes"
                value={completedQuizzes}
              />

              <Stat icon={<Award size={20} />} title="Certificates" value="0" />

              <Stat
                icon={<ShieldAlert size={20} />}
                title="Analyses"
                value={analyses.length}
              />

              <Stat
                icon={<ShieldCheck size={20} />}
                title="Safety Score"
                value={`${safetyScore}%`}
              />

              <Stat
                icon={<TrendingUp size={20} />}
                title="Progress"
                value={`${learningProgress}%`}
              />
            </div>
          </div>
        </div>

        {/* Achievements */}

        <div
          className="
            rounded-3xl
            bg-white
            p-6
            shadow-sm
          "
        >
          <h2 className="text-xl font-semibold">Achievements</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {achievements.length === 0 ? (
                <p className="text-slate-500">No achievements unlocked yet.</p>
              ) : (
                achievements.map((achievement) => (
                  <Achievement
                    key={achievement.id}
                    title={achievement.title}
                    icon={achievement.icon}
                  />
                ))
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}

        <div
          className="
            rounded-3xl
            bg-white
            p-6
            shadow-sm
          "
        >
          <div className="flex flex-wrap gap-2">
            <TabButton
              title="Courses"
              active={activeTab === "courses"}
              onClick={() => setActiveTab("courses")}
            />

            <TabButton
              title="Certificates"
              active={activeTab === "certificates"}
              onClick={() => setActiveTab("certificates")}
            />

            <TabButton
              title="Activity"
              active={activeTab === "activity"}
              onClick={() => setActiveTab("activity")}
            />

            <TabButton
              title="Achievements"
              active={activeTab === "achievements"}
              onClick={() => setActiveTab("achievements")}
            />
          </div>

          <div className="mt-6">
            {activeTab === "courses" && (
              <div className="space-y-3">
                {completedCourses.length === 0 ? (
                  <p className="text-slate-500">No completed courses yet.</p>
                ) : (
                  completedCourses.map((course) => (
                    <div
                      key={course.id}
                      className="
            flex items-center justify-between
            rounded-2xl
            bg-slate-50
            p-4
          "
                    >
                      <div>
                        <h3 className="font-semibold">{course.title}</h3>

                        <p className="text-sm text-slate-500">
                          Course Completed
                        </p>
                      </div>

                      <span className="text-green-600">✓</span>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === "certificates" && (
              <p>Certificates will appear here.</p>
            )}

            {activeTab === "activity" && (
              <div className="space-y-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-medium">Completed Lessons</p>

                  <p className="text-slate-500">{completedLessons}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-medium">Completed Quizzes</p>

                  <p className="text-slate-500">{completedQuizzes}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-medium">Latest Analysis</p>

                  <p className="text-slate-500">
                    {recentAnalysis
                      ? recentAnalysis.content
                      : "No analyses yet"}
                  </p>
                </div>
              </div>
            )}

            {activeTab === "achievements" && (
              <p>Achievement history will appear here.</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function Stat({ icon, title, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <div className="mb-2 text-blue-600">{icon}</div>

      <p className="text-sm text-slate-500">{title}</p>

      <h3 className="mt-1 text-2xl font-bold">{value}</h3>
    </div>
  );
}

function Achievement({ title, icon }) {
  return (
    <div
      className="
        rounded-2xl
        bg-slate-50
        p-5
        text-center
        transition
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <div className="text-3xl">{icon}</div>

      <p className="mt-3 font-medium">{title}</p>
    </div>
  );
}

function TabButton({ title, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-xl
        px-4
        py-2
        text-sm
        transition
        ${active ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}
      `}
    >
      {title}
    </button>
  );
}

export default Profile;
