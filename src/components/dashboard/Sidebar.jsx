import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Scam Analyzer", path: "/analyzer" },
  { name: "Learning Center", path: "/learning" },
  { name: "Threat Simulation", path: "/simulation" },
  { name: "Settings", path: "/settings" },
  { name: "Profile", path: "/profile" },
];

function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-6">
      <h1 className="mb-8 text-2xl font-bold text-blue-600">SafeNet</h1>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
