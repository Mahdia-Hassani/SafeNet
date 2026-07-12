import DashboardLayout from "../layouts/DashboardLayout";

import StatCard from "../components/dashboard/StatCard";
import SecurityTip from "../components/dashboard/SecurityTip";
import RecentAnalyses from "../components/dashboard/RecentAnalyses";

import { calculateSafetyScore } from "../utils/calculateSafetyScore";

import { ShieldCheck, BookOpen, Target, ShieldAlert } from "lucide-react";

import useAnalyses from "../hooks/useAnalyses";

function Dashboard() {
  const analyses = useAnalyses();

  const safetyScore = calculateSafetyScore(analyses);

  const dashboardStats = [
    {
      id: 1,
      title: "Safety Score",
      value: `${safetyScore}%`,
      icon: ShieldCheck,
    },
    {
      id: 2,
      title: "Completed Lessons",
      value: 0,
      icon: BookOpen,
    },
    {
      id: 3,
      title: "Completed Quizzes",
      value: 0,
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
