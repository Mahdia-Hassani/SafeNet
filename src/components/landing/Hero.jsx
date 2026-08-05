import HeroScanner from "./HeroScanner";

function Hero() {
  return (
    <section
      className="
      min-h-[calc(100vh-80px)]
      bg-background
      flex
      items-center
      overflow-hidden
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        w-full
        "
      >
        <div
          className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
          "
        >
          {/* Left Content */}

          <div
            className="
            space-y-8
            "
          >
            <h1
              className="
              text-5xl
              sm:text-6xl
              lg:text-7xl

              font-semibold

              leading-[1.05]

              text-text-primary
              "
            >
              Detect Threats.
              <br />
              Protect Yourself.
            </h1>

            <p
              className="
              text-lg

              max-w-xl

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

              gap-4
              "
            >
              <button
                className="
                px-8
                py-3.5

                rounded-lg

                bg-primary

                text-white

                font-medium

                hover:bg-primary-hover

                transition

                shadow-lg
                shadow-primary/20
                "
              >
                Analyze a Threat
              </button>

              <button
                className="
                px-8
                py-3.5

                rounded-lg

                border
                border-border

                bg-transparent

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
