import { Trophy, Target, CheckCircle2 } from "lucide-react";

function ScoreCard({ score = 0, total = 0 }) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  let performance = {
    label: "Needs Improvement",
    color: "text-red-600",
    bg: "bg-red-50",
  };

  if (percentage >= 80) {
    performance = {
      label: "Excellent",
      color: "text-green-600",
      bg: "bg-green-50",
    };
  } else if (percentage >= 50) {
    performance = {
      label: "Good",
      color: "text-amber-600",
      bg: "bg-amber-50",
    };
  }

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
          <Trophy size={20} />
        </div>

        <div>
          <h3
            className="
              font-semibold
              text-text-primary
            "
          >
            Performance Summary
          </h3>

          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            Your cybersecurity simulation result
          </p>
        </div>
      </div>

      {/* Body */}

      <div
        className="
          grid
          gap-6
          px-6
          py-6
          md:grid-cols-3
        "
      >
        {/* Score */}

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
              items-center
              gap-3
              text-text-secondary
            "
          >
            <Target size={18} />

            <span className="text-sm">Final Score</span>
          </div>

          <p
            className="
              mt-4
              text-3xl
              font-bold
              text-text-primary
            "
          >
            {score}/{total}
          </p>
        </div>

        {/* Accuracy */}

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
              items-center
              gap-3
              text-text-secondary
            "
          >
            <CheckCircle2 size={18} />

            <span className="text-sm">Accuracy</span>
          </div>

          <p
            className="
              mt-4
              text-3xl
              font-bold
              text-text-primary
            "
          >
            {percentage}%
          </p>
        </div>

        {/* Performance */}

        <div
          className="
            border
            border-border
            p-5
          "
        >
          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            Performance
          </p>

          <span
            className={`
              mt-4
              inline-flex
              px-4
              py-2
              text-sm
              font-medium
              ${performance.bg}
              ${performance.color}
            `}
          >
            {performance.label}
          </span>
        </div>
      </div>
    </section>
  );
}

export default ScoreCard;
