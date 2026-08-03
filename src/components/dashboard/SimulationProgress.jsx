import { Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function SimulationProgress({ completed, score, totalScenarios, percentage }) {
  return (
    <section
      className="
        border
        border-border
        bg-card
      "
    >
      <div className="border-b border-border px-6 py-5">
        <h2 className="text-lg font-semibold text-text-primary">
          Threat Simulation
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          Practice with realistic cyber attack scenarios.
        </p>
      </div>

      <div className="space-y-8 p-6">
        {/* Score */}

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-text-secondary">Current Score</p>

            <h3 className="mt-1 text-3xl font-bold text-text-primary">
              {score}
            </h3>
          </div>

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              bg-primary/10
              text-primary
            "
          >
            <Target size={28} />
          </div>
        </div>

        {/* Progress */}

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-text-secondary">Overall Progress</span>

            <span className="font-semibold text-primary">{percentage}%</span>
          </div>

          <div className="h-2 bg-border">
            <div
              className="h-full bg-primary transition-all"
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>
        </div>

        {/* CTA */}

        <Link
          to="/learning"
          className="
            mt-8
            flex
            items-center
            justify-between
            text-primary
            transition
            hover:translate-x-1
          "
        >
          <span className="font-medium">Continue Simulation</span>

          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export default SimulationProgress;
