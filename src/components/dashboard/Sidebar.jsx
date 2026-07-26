import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  ShieldAlert,
  BookOpen,
  Target,
  User,
  Settings,
  Shield,
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
  {
    name: "Security Coach",
    path: "/coach",
    icon: Shield,
  },
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <aside
      className={`
        sticky top-0 h-screen border-r bg-white
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <Shield size={28} className="text-blue-600" />

              <h1 className="text-2xl font-bold text-blue-600">SafeNet</h1>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="
              rounded-lg
              p-2
              transition
              hover:bg-slate-100
            "
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
        {/* Navigation */}
        <nav className="flex-1 px-3 py-6">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3
                    rounded-xl
                    px-3 py-3
                    transition-all
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

        <div className="px-2 pb-2">
          {collapsed ? (
            <NavLink to="/profile" className="flex justify-center">
              <img
                src="../../../public/Avatar.jpg"
                alt="User Avatar"
                className="
          h-10
          w-10
          rounded-full
          object-cover
          shadow-sm
        "
              />
            </NavLink>
          ) : (
            <>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="
    flex
    w-full
    items-center
    justify-between
    rounded-2xl
    bg-white
    px-3
    py-2.5
    shadow-[0_2px_8px_rgba(0,0,0,0.05)]
    transition-all
    hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]
  "
              >
                <div className="flex items-center gap-3">
                  <img
                    src="../../../public/Avatar.jpg"
                    alt="User Avatar"
                    className="
        h-10
        w-10
        rounded-full
        object-cover
      "
                  />

                  <div className="text-left">
                    <p className="text-base font-semibold text-slate-900">
                      Ali
                    </p>

                    <p className="text-sm text-slate-500">
                      Cybersecurity Learner
                    </p>
                  </div>
                </div>

                {userMenuOpen ? (
                  <ChevronUp size={18} className="text-slate-500 shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-slate-500 shrink-0" />
                )}
              </button>
              {userMenuOpen && (
                <div
                  className="
            mt-2
            rounded-2xl
            bg-white
            p-2
            shadow-sm
          "
                >
                  <NavLink
                    to="/profile"
                    className="
              flex items-center gap-3
              rounded-xl px-3 py-2
              text-slate-600
              transition
              hover:bg-slate-100
            "
                  >
                    <User size={18} />
                    <span>Profile</span>
                  </NavLink>

                  <NavLink
                    to="/settings"
                    className="
              mt-1
              flex items-center gap-3
              rounded-xl px-3 py-2
              text-slate-600
              transition
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
