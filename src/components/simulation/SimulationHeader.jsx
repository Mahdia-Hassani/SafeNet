import { ShieldCheck, Target } from "lucide-react";

function SimulationHeader() {
  return (
    <section
      className="
        border
        border-border
        bg-card
        shadow-sm
      "
    >
      <div
        className="
          flex
          items-start
          justify-between
          px-8
          py-7
        "
      >
        {/* Left */}

        <div className="flex items-start gap-5">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              bg-primary
              text-white
            "
          >
            <ShieldCheck size={28} />
          </div>

          <div>
            <h1
              className="
                text-3xl
                font-bold
                text-text-primary
              "
            >
              Threat Simulation
            </h1>

            <p
              className="
                mt-3
                max-w-2xl
                text-sm
                leading-7
                text-text-secondary
              "
            >
              Practice recognizing real cybersecurity threats through
              interactive scenarios. Improve your decision-making skills,
              identify phishing attempts, and build safer online habits with
              realistic simulations.
            </p>
          </div>
        </div>

        {/* Right */}

        <div
          className="
            hidden
            lg:flex
            items-center
            gap-3
            border
            border-border
            bg-surface
            px-5
            py-3
          "
        >
          <Target size={20} className="text-primary" />

          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-wide
                text-text-secondary
              "
            >
              Difficulty
            </p>

            <p
              className="
                text-sm
                font-semibold
                text-text-primary
              "
            >
              Beginner • Intermediate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimulationHeader;
