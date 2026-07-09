import DashboardLayout from "../layouts/DashboardLayout";

import Card from "../components/ui/Card";
import StatCard from "../components/dashboard/StatCard";
import dashboardStats from "../data/dashboardStats";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Card>
          <h1 className="text-3xl font-bold">Welcome Back 👋</h1>

          <p className="mt-2 text-slate-500">
            Continue improving your cybersecurity awareness.
          </p>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.id} title={stat.title} value={stat.value} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
