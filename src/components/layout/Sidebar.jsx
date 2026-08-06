import { LogOut } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  ShieldAlert,
  BookOpen,
  Target,
  User,
  Shield,
  X,
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

function Sidebar({ mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      navigate("/login", {
        replace: true,
      });
    }
  }

  return (
    <aside
      className={`
        fixed
        left-0
        top-0
        z-50
        h-screen
        w-72
        flex
        flex-col
        bg-surface
        shadow-[4px_0_15px_rgba(0,0,0,0.12)]
        transition-transform
        duration-300

        lg:sticky
        lg:translate-x-0

        ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      {/* Header */}

      <div
        className="
          h-20
          flex
          items-center
          justify-between
          px-6
        "
      >
        <div
          onClick={() => navigate("/")}
          className="
            flex
            items-center
            gap-3
            cursor-pointer
          "
        >
          <Shield size={30} className="text-primary" />

          <h1 className="text-2xl font-bold text-primary">SafeNet</h1>
        </div>

        <button
          onClick={() => setMobileOpen(false)}
          className="
            lg:hidden
            rounded-md
            p-2
            text-text-secondary
            hover:bg-card
          "
        >
          <X size={22} />
        </button>
      </div>

      {/* Navigation */}

      <nav
        className="
          flex-1
          px-4
          py-6
        "
      >
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `
                flex
                items-center
                gap-4
                px-4
                py-3
                text-sm
                font-medium
                transition


                ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "text-text-secondary hover:bg-card hover:text-text-primary"
                }

                `
                }
              >
                <Icon size={21} />

                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Bottom */}

      <div
        className="
          px-4
          pb-6
          space-y-2
        "
      >
        <NavLink
          to="/profile"
          onClick={() => setMobileOpen(false)}
          className="
            flex
            items-center
            gap-4
            px-4
            py-3
            text-text-secondary
            hover:bg-card
            hover:text-text-primary
            transition
          "
        >
          <User size={20} />

          <span>Profile</span>
        </NavLink>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="
            w-full
            flex
            items-center
            gap-4
            px-4
            py-3
            text-red-500
            hover:bg-red-50
            transition
          "
        >
          <LogOut size={20} />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
