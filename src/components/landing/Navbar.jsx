import { useState } from "react";
import { ShieldCheck, ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header
      className="
      sticky
      top-0
      z-50

      w-full

      bg-background/80
      backdrop-blur-lg

      border-b
      border-border/50
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        h-20

        px-6

        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}

        <div
          className="
          flex
          items-center
          gap-3
          "
        >
          <div
            className="
            w-11
            h-11

            rounded-xl

            bg-primary/10

            border
            border-primary/30

            flex
            items-center
            justify-center
            "
          >
            <ShieldCheck size={26} className="text-primary" />
          </div>

          <h1
            className="
            text-xl
            font-semibold
            text-text-primary
            "
          >
            SafeNet
          </h1>
        </div>

        {/* Desktop Navigation */}

        <nav
          className="
          hidden
          lg:flex

          items-center

          gap-9
          "
        >
          <a
            className="
            text-sm
            text-text-secondary

            hover:text-text-primary

            transition

            cursor-pointer
            "
          >
            Analyzer
          </a>

          <a
            className="
            text-sm
            text-text-secondary

            hover:text-text-primary

            transition

            cursor-pointer
            "
          >
            Learning
          </a>

          <button
            className="
            flex
            items-center
            gap-1

            text-sm
            text-text-secondary

            hover:text-text-primary

            transition
            "
          >
            Resources
            <ChevronDown size={15} />
          </button>

          <a
            className="
            text-sm
            text-text-secondary

            hover:text-text-primary

            transition

            cursor-pointer
            "
          >
            About
          </a>
        </nav>

        {/* Actions */}

        <div
          className="
          flex
          items-center
          gap-4
          "
        >
          <button
            className="
            hidden
            sm:block

            text-sm

            text-text-primary

            hover:text-primary

            transition
            "
          >
            Sign In
          </button>

          <button
            className="
            px-6
            py-2.5

            rounded-xl

            bg-primary

            text-white

            text-sm

            font-medium

            hover:bg-primary-hover

            transition

            shadow-lg
            shadow-primary/20
            "
          >
            Get Started
          </button>

          {/* Mobile Toggle */}

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="
            lg:hidden

            text-text-primary
            "
          >
            {openMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {openMenu && (
        <div
          className="
            lg:hidden

            px-6
            py-6

            bg-background

            border-t
            border-border/50

            space-y-5
            "
        >
          <a
            className="
              block

              text-text-secondary

              hover:text-text-primary

              transition
              "
          >
            Analyzer
          </a>

          <a
            className="
              block

              text-text-secondary

              hover:text-text-primary

              transition
              "
          >
            Learning
          </a>

          <a
            className="
              block

              text-text-secondary

              hover:text-text-primary

              transition
              "
          >
            Resources
          </a>

          <a
            className="
              block

              text-text-secondary

              hover:text-text-primary

              transition
              "
          >
            About
          </a>

          <button
            className="
              w-full

              py-3

              rounded-xl

              bg-primary

              text-white

              font-medium
              "
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
