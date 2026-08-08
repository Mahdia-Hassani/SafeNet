import { useNavigate } from "react-router-dom";
import HeroScanner from "./HeroScanner";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="
        min-h-[calc(100vh-80px)]
        bg-background
        flex
        items-center
        overflow-hidden
        py-16
        lg:py-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
          w-full
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            lg:gap-16
            items-center
          "
        >
          {/* Left Content */}

          <div
            className="
              space-y-7
              lg:space-y-8
            "
          >
            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl

                font-semibold

                leading-[1.05]

                tracking-tight

                text-text-primary
              "
            >
              Detect Threats.
              <br />
              Protect Yourself.
            </h1>

            <p
              className="
                text-base
                sm:text-lg

                max-w-lg
                lg:max-w-xl

                text-text-secondary

                leading-relaxed
              "
            >
              SafeNet helps you identify suspicious messages, emails, and links
              using AI. Understand risks and build safer online habits.
            </p>

            <div
              className="
                flex
                flex-col
                sm:flex-row

                gap-3
                sm:gap-4

                pt-1
              "
            >
              <button
                onClick={() => navigate("/analyzer")}
                className="
                  px-6
                  sm:px-7

                  py-3
                  sm:py-3.5

                  rounded-lg

                  bg-primary

                  text-sm
                  sm:text-base

                  font-medium

                  text-white

                  hover:bg-primary-hover

                  transition
                "
              >
                Analyze a Threat
              </button>

              <button
                onClick={() => navigate("/register")}
                className="
                  px-6
                  sm:px-7

                  py-3
                  sm:py-3.5

                  rounded-lg

                  border
                  border-border

                  text-sm
                  sm:text-base

                  font-medium

                  text-text-primary

                  hover:bg-surface

                  transition
                "
              >
                Create Account
              </button>
            </div>
          </div>

          {/* Right Scanner */}

          <div
            className="
              flex
              justify-center
              lg:justify-end

              mt-8
              lg:mt-0
            "
          >
            <HeroScanner />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
