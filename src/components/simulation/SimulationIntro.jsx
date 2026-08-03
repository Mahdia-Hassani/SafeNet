import { ShieldAlert, Target, Brain } from "lucide-react";

function SimulationIntro({ scenarios = 5, difficulty = "Intermediate" }) {
  return (
    <section
      className="
        border
        border-border
        bg-card
      "
    >
      {/* Header */}

      <div
        className="
          border-b
          border-border
          px-6
          py-5
        "
      >
        <h2
          className="
            text-xl
            font-semibold
            text-text-primary
          "
        >
          Threat Simulation
        </h2>

        <p
          className="
            mt-2
            text-sm
            text-text-secondary
          "
        >
          Practice identifying cybersecurity threats through realistic
          scenarios.
        </p>
      </div>

      {/* Content */}

      <div
        className="
          grid
          gap-5
          p-6
          md:grid-cols-3
        "
      >
        <InfoCard
          icon={ShieldAlert}
          title="Real Threats"
          value="Phishing, scams and attacks"
        />

        <InfoCard
          icon={Target}
          title="Scenarios"
          value={`${scenarios} challenges`}
        />

        <InfoCard icon={Brain} title="Difficulty" value={difficulty} />
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, value }) {
  return (
    <div
      className="
        border
        border-border
        p-5
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          bg-primary/10
          text-primary
        "
      >
        <Icon size={20} />
      </div>

      <h3
        className="
          mt-4
          font-semibold
          text-text-primary
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-sm
          text-text-secondary
        "
      >
        {value}
      </p>
    </div>
  );
}

export default SimulationIntro;
