import Sidebar from "../components/dashboard/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}

export default DashboardLayout;
