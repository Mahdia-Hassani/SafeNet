import DashboardLayout from "../layouts/DashboardLayout";

import StatCard from "../components/dashboard/StatCard";
import SecurityTip from "../components/dashboard/SecurityTip";
import RecentAnalyses from "../components/dashboard/RecentAnalyses";

import dashboardStats from "../data/dashboardStats";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome Back 👋</h1>

          <p className="mt-2 text-slate-500">
            Continue improving your cybersecurity awareness.
          </p>
        </div>

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

        <div className="grid gap-6 lg:grid-cols-2">
          <RecentAnalyses />
          <SecurityTip />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
