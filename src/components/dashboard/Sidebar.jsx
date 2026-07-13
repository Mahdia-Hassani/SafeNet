import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  ShieldAlert,
  BookOpen,
  Target,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Scam Analyzer",
    path: "/analyzer",
    icon: ShieldAlert,
  },
  {
    name: "Learning Center",
    path: "/learning",
    icon: BookOpen,
  },
  {
    name: "Threat Simulation",
    path: "/simulation",
    icon: Target,
  },
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <aside
      className={`
        sticky top-0 h-screen border-r bg-white transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      <div className="flex h-full flex-col">
        {/* Header */}

        <div className="flex items-center justify-between border-b p-4">
          {!collapsed && (
            <h1 className="text-xl font-bold text-blue-600">SafeNet</h1>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex-1 p-3">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3 rounded-xl px-3 py-3 transition-all
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-100"
                    }
                  `
                  }
                >
                  <Icon size={20} />

                  {!collapsed && (
                    <span className="font-medium">{item.name}</span>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* User Section */}

        <div className="border-t p-3">
          {collapsed ? (
            <div className="flex justify-center">
              <User size={22} />
            </div>
          ) : (
            <>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="
                  flex w-full items-center
                  justify-between rounded-xl
                  p-3 transition
                  hover:bg-slate-100
                "
              >
                <div>
                  <p className="font-medium text-slate-800">SafeNet User</p>

                  <p className="text-sm text-slate-500">
                    Cybersecurity Learner
                  </p>
                </div>

                {userMenuOpen ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {userMenuOpen && (
                <div className="mt-2 space-y-1">
                  <NavLink
                    to="/profile"
                    className="
                      flex items-center gap-3
                      rounded-lg px-3 py-2
                      text-slate-600
                      hover:bg-slate-100
                    "
                  >
                    <User size={18} />
                    <span>Profile</span>
                  </NavLink>

                  <NavLink
                    to="/settings"
                    className="
                      flex items-center gap-3
                      rounded-lg px-3 py-2
                      text-slate-600
                      hover:bg-slate-100
                    "
                  >
                    <Settings size={18} />
                    <span>Settings</span>
                  </NavLink>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
