import DashboardLayout from "../layouts/DashboardLayout";

import StatCard from "../components/dashboard/StatCard";
import SecurityTip from "../components/dashboard/SecurityTip";
import RecentAnalyses from "../components/dashboard/RecentAnalyses";
import LearningProgress from "../components/dashboard/LearningProgress";
import Achievements from "../components/dashboard/Achievements";

import { ShieldCheck, BookOpen, Target, ShieldAlert } from "lucide-react";

import useAnalyses from "../hooks/useAnalyses";

import lessons from "../data/lesson";

import {
  getCompletedLessonsCount,
  getLearningProgress,
} from "../utils/learningStorage";

import { getCompletedQuizzesCount } from "../utils/quizStorage";

function Dashboard() {
  const analyses = useAnalyses();

  const completedLessons = getCompletedLessonsCount();

  const completedQuizzes = getCompletedQuizzesCount();

  const learningProgress = getLearningProgress(lessons.length);

  const dashboardStats = [
    {
      id: 1,
      title: "Safety Score",
      value: `${learningProgress}%`,
      icon: ShieldCheck,
    },
    {
      id: 2,
      title: "Completed Lessons",
      value: completedLessons,
      icon: BookOpen,
    },
    {
      id: 3,
      title: "Completed Quizzes",
      value: completedQuizzes,
      icon: Target,
    },
    {
      id: 4,
      title: "Threat Analyses",
      value: analyses.length,
      icon: ShieldAlert,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}

        <div>
          <h1 className="text-3xl font-bold">Welcome Back 👋</h1>

          <p className="mt-2 text-slate-500">
            Continue improving your cybersecurity awareness.
          </p>
        </div>

        {/* Stats */}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) => (
            <StatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Learning Progress */}

        <LearningProgress />

        {/* Achievements */}

        <Achievements />

        {/* Content */}

        <div className="grid gap-6 lg:grid-cols-2">
          <RecentAnalyses />
          <SecurityTip />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
