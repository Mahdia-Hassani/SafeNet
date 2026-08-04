import { ShieldAlert, AlertTriangle, FileWarning, Hash } from "lucide-react";

function ScenarioCard({ scenario }) {
  if (!scenario) return null;

  const riskStyle =
    scenario.difficulty === "Beginner"
      ? {
          box: "border-green-200 bg-green-50",
          text: "text-green-700",
        }
      : scenario.difficulty === "Intermediate"
        ? {
            box: "border-amber-200 bg-amber-50",
            text: "text-amber-700",
          }
        : {
            box: "border-red-200 bg-red-50",
            text: "text-red-700",
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
          px-8
          py-6
        "
      >
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              border
              border-primary/20
              bg-primary/5
              text-primary
            "
          >
            <ShieldAlert size={24} />
          </div>

          <div>
            <h2
              className="
                text-xl
                font-bold
                text-text-primary
              "
            >
              Threat Scenario
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-text-secondary
              "
            >
              Review the evidence before making a security decision.
            </p>
          </div>
        </div>

        <span
          className={`
            border
            px-4
            py-2
            text-sm
            font-medium

            ${riskStyle.box}
            ${riskStyle.text}
          `}
        >
          {scenario.difficulty}
        </span>
      </div>

      {/* Metadata */}

      <div
        className="
          grid
          gap-6
          border-b
          border-border
          px-8
          py-6
          md:grid-cols-3
        "
      >
        <div>
          <p className="text-xs uppercase text-text-secondary">Threat Type</p>

          <div
            className="
              mt-2
              flex
              items-center
              gap-2
              font-medium
              text-text-primary
            "
          >
            <FileWarning size={18} />

            {scenario.type}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase text-text-secondary">Scenario ID</p>

          <div
            className="
              mt-2
              flex
              items-center
              gap-2
              font-medium
              text-text-primary
            "
          >
            <Hash size={18} />

            {scenario.id}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase text-text-secondary">
            Classification
          </p>

          <p
            className="
              mt-2
              font-medium
              text-text-primary
            "
          >
            {scenario.category}
          </p>
        </div>
      </div>

      {/* Scenario Content */}

      <div
        className="
          space-y-8
          px-8
          py-8
        "
      >
        {/* Scenario Description */}

        <div>
          <h3
            className="
              mb-3
              font-semibold
              text-text-primary
            "
          >
            Scenario Description
          </h3>

          <p
            className="
              whitespace-pre-line
              border-l-4
              border-primary
              pl-5
              leading-8
              text-text-secondary
            "
          >
            {scenario.scenario}
          </p>
        </div>

        {/* Decision Point */}

        <div
          className="
            border-t
            border-border
            pt-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              mb-4
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                border
                border-primary/20
                bg-primary/5
                text-primary
              "
            >
              <AlertTriangle size={20} />
            </div>

            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-primary
                "
              >
                Security Decision
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-text-secondary
                "
              >
                Select the safest response based on the evidence.
              </p>
            </div>
          </div>

          <h3
            className="
              max-w-3xl
              text-xl
              font-bold
              leading-relaxed
              text-text-primary
            "
          >
            {scenario.question}
          </h3>
        </div>

        {/* Instruction */}

        <div
          className="
            flex
            items-start
            gap-3
            border
            border-primary/20
            bg-primary/5
            px-5
            py-4
          "
        >
          <AlertTriangle size={20} className="mt-0.5 text-primary" />

          <p
            className="
              text-sm
              leading-6
              text-text-secondary
            "
          >
            Evaluate the information carefully before selecting your response.
            Every decision affects your final simulation score.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ScenarioCard;
