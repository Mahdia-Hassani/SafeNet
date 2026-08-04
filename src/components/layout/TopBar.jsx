import { Bell, Sun, Moon, Menu } from "lucide-react";
import { Link } from "react-router-dom";

import useTheme from "../../hooks/useTheme";

function Topbar({ onMenuClick }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="
        sticky
        top-0
        z-30
        h-20
        flex
        items-center
        justify-between
        px-4
        sm:px-6
        lg:px-8
        bg-background
      "
    >
      {/* Mobile Hamburger */}

      <button
        onClick={onMenuClick}
        className="
          flex
          lg:hidden
          h-10
          w-10
          items-center
          justify-center
          rounded-md
          bg-card
          text-text-primary
          transition
          hover:bg-surface
        "
      >
        <Menu size={22} />
      </button>

      {/* Right Side */}

      <div
        className="
          ml-auto
          flex
          items-center
          gap-3
        "
      >
        {/* Theme */}

        <button
          onClick={toggleTheme}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-md
            bg-card
            text-primary
            transition
            hover:bg-surface
          "
        >
          {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Notification */}

        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-md
            bg-card
            text-primary
            transition
            hover:bg-surface
          "
        >
          <Bell size={20} />
        </button>

        {/* Avatar */}

        <Link to="/profile">
          <img
            src="/images/Avatar.jpg"
            alt="User Avatar"
            className="
              h-10
              w-10
              rounded-full
              object-cover
              cursor-pointer
              transition
              hover:scale-105
            "
          />
        </Link>
      </div>
    </header>
  );
}

export default Topbar;
