import { Bell, Sun, Moon, Menu } from "lucide-react";
import useTheme from "../../hooks/useTheme";

function Topbar({ onMenuClick }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="
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

      {/* Mobile Logo */}

      <div
        className="
          lg:hidden
          text-xl
          font-bold
          text-primary
        "
      >
        SafeNet
      </div>

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

        <img
          src="/images/Avatar.jpg"
          alt="User Avatar"
          className="
            h-10
            w-10
            rounded-full
            object-cover
          "
        />
      </div>
    </header>
  );
}

export default Topbar;
