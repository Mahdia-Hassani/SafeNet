import { Target } from "lucide-react";

function SimulationProgress({ current = 0, total = 0 }) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <section
      className="
        border
        border-border
        bg-card
        shadow-sm
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-4
          border-b
          border-border
          px-6
          py-5
        "
      >
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            bg-primary
            text-white
          "
        >
          <Target size={20} />
        </div>

        <div>
          <h3
            className="
              font-semibold
              text-text-primary
            "
          >
            Simulation Progress
          </h3>

          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            Track your cybersecurity challenge progress
          </p>
        </div>
      </div>

      {/* Content */}

      <div
        className="
          space-y-5
          px-6
          py-6
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-sm
              text-text-secondary
            "
          >
            Question {current} of {total}
          </span>

          <span
            className="
              text-sm
              font-semibold
              text-primary
            "
          >
            {percentage}%
          </span>
        </div>

        {/* Progress Bar */}

        <div
          className="
            h-2
            w-full
            bg-surface
            overflow-hidden
          "
        >
          <div
            className="
              h-full
              bg-primary
              transition-all
              duration-300
            "
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>

        <div
          className="
            flex
            justify-between
            text-sm
            text-text-secondary
          "
        >
          <span>Completed: {current}</span>

          <span>Remaining: {Math.max(total - current, 0)}</span>
        </div>
      </div>
    </section>
  );
}

export default SimulationProgress;
