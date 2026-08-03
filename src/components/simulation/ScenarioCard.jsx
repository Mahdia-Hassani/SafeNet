import { ShieldAlert, AlertTriangle, FileWarning } from "lucide-react";

function ScenarioCard({ scenario }) {
  if (!scenario) return null;

  const risk = scenario.riskLevel?.toLowerCase();

  const riskStyle =
    risk === "high"
      ? {
          box: "bg-red-50 border-red-200",
          text: "text-red-600",
        }
      : risk === "medium"
        ? {
            box: "bg-amber-50 border-amber-200",
            text: "text-amber-600",
          }
        : {
            box: "bg-green-50 border-green-200",
            text: "text-green-600",
          };

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
          justify-between
          border-b
          border-border
          px-6
          py-5
        "
      >
        <div
          className="
            flex
            items-center
            gap-4
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
            <ShieldAlert size={20} />
          </div>

          <div>
            <h3
              className="
                font-semibold
                text-text-primary
              "
            >
              Threat Scenario
            </h3>

            <p
              className="
                text-sm
                text-text-secondary
              "
            >
              Analyze the situation and choose the safest action.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}

      <div
        className="
          space-y-6
          px-6
          py-6
        "
      >
        {/* Threat Type */}

        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <FileWarning size={20} className="text-primary" />

            <span
              className="
                font-medium
                text-text-primary
              "
            >
              {scenario.type}
            </span>
          </div>

          <span
            className={`
              border
              px-3
              py-1
              text-sm
              font-medium
              ${riskStyle.box}
              ${riskStyle.text}
            `}
          >
            {scenario.riskLevel}
          </span>
        </div>

        {/* Scenario Description */}

        <div>
          <h4
            className="
              mb-2
              font-semibold
              text-text-primary
            "
          >
            Situation
          </h4>

          <p
            className="
              leading-7
              text-text-secondary
            "
          >
            {scenario.description}
          </p>
        </div>

        {/* Warning */}

        {scenario.warning && (
          <div
            className="
              flex
              gap-3
              border
              border-amber-200
              bg-amber-50
              px-4
              py-4
            "
          >
            <AlertTriangle size={20} className="text-amber-600" />

            <p
              className="
                text-sm
                text-amber-700
              "
            >
              {scenario.warning}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ScenarioCard;
