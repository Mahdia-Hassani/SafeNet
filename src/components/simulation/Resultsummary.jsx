import { CheckCircle2, Target, Award } from "lucide-react";

function ResultSummary({ score = 0, total = 0 }) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  let message = "Keep learning and improve your security awareness.";

  if (percentage >= 80) {
    message = "Excellent work! You have strong cybersecurity awareness.";
  } else if (percentage >= 50) {
    message = "Good job! You understand the basic security concepts.";
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
          <Award size={20} />
        </div>

        <div>
          <h2
            className="
              font-semibold
              text-text-primary
            "
          >
            Simulation Completed
          </h2>

          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            Here is your cybersecurity performance summary.
          </p>
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
        <div
          className="
            flex
            items-center
            justify-between
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
            "
          >
            <Target size={20} />

            <span>Final Score</span>
          </div>

          <strong
            className="
              text-2xl
              text-text-primary
            "
          >
            {score}/{total}
          </strong>
        </div>

        <div
          className="
            flex
            items-center
            justify-between
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
            "
          >
            <CheckCircle2 size={20} />

            <span>Accuracy</span>
          </div>

          <strong
            className="
              text-2xl
              text-text-primary
            "
          >
            {percentage}%
          </strong>
        </div>

        <div
          className="
            border
            border-border
            bg-surface
            p-5
          "
        >
          <p
            className="
              text-text-secondary
            "
          >
            {message}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ResultSummary;
