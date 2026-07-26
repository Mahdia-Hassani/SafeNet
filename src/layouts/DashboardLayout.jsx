import Sidebar from "../components/dashboard/Sidebar";
import Assistant from "../components/assistant/Assistant";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-8">{children}</main>
      <Assistant />
    </div>
  );
}

export default DashboardLayout;
