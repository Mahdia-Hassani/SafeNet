import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Menu, X } from "lucide-react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpenMenu(false);
  };

  const goToHome = () => {
    navigate("/");
    setOpenMenu(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

        <button
          onClick={goToHome}
          className="
            flex
            items-center
            gap-3

            cursor-pointer
          "
        >
          <div
            className="
              w-11
              h-11

              flex
              items-center
              justify-center

              rounded-full

              border
              border-primary/0
            "
          >
            <ShieldCheck size={40} className="text-primary" />
          </div>

          <span
            className="
              text-xl
              font-semibold
              text-text-primary
            "
          >
            SafeNet
          </span>
        </button>

        {/* Desktop Navigation */}

        <nav
          className="
            hidden
            lg:flex

            items-center
            gap-9
          "
        >
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="
              text-sm
              text-text-secondary

              hover:text-text-primary

              transition
            "
          >
            How It Works
          </button>

          <button
            onClick={() => scrollToSection("features")}
            className="
              text-sm
              text-text-secondary

              hover:text-text-primary

              transition
            "
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("learning")}
            className="
              text-sm
              text-text-secondary

              hover:text-text-primary

              transition
            "
          >
            Learn
          </button>
        </nav>

        {/* Actions */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          {/* Sign In */}

          <button
            onClick={() => navigate("/login")}
            className="
              hidden
              sm:block

              text-sm
              font-medium

              text-text-primary

              hover:text-primary

              transition
            "
          >
            Sign In
          </button>

          {/* Get Started */}

          <button
            onClick={() => navigate("/register")}
            className="
              hidden
              sm:block

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

              p-1
            "
            aria-label="Toggle navigation menu"
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
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
            "
          >
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="
                text-left

                text-text-secondary

                hover:text-text-primary

                transition
              "
            >
              How It Works
            </button>

            <button
              onClick={() => scrollToSection("features")}
              className="
                text-left

                text-text-secondary

                hover:text-text-primary

                transition
              "
            >
              Features
            </button>

            <button
              onClick={() => scrollToSection("learning")}
              className="
                text-left

                text-text-secondary

                hover:text-text-primary

                transition
              "
            >
              Learn
            </button>

            <div
              className="
                pt-4

                border-t
                border-border/50

                flex
                flex-col
                gap-3
              "
            >
              <button
                onClick={() => {
                  navigate("/login");
                  setOpenMenu(false);
                }}
                className="
                  w-full
                  py-3

                  rounded-xl

                  border
                  border-border

                  text-text-primary

                  font-medium
                "
              >
                Sign In
              </button>

              <button
                onClick={() => {
                  navigate("/register");
                  setOpenMenu(false);
                }}
                className="
                  w-full
                  py-3

                  rounded-none

                  bg-primary

                  text-white

                  font-medium

                  hover:bg-primary-hover

                  transition
                "
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
