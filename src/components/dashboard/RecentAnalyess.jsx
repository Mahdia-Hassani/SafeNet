import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function RecentAnalyses({ analyses = [] }) {
  function riskStyle(level) {
    switch (level?.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-700";

      case "medium":
        return "bg-amber-100 text-amber-700";

      default:
        return "bg-green-100 text-green-700";
    }
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

      <div className="border-b border-border px-6 py-5">
        <h2 className="text-lg font-semibold text-text-primary">
          Recent Threat Analyses
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          Your latest AI security reports.
        </p>
      </div>

      {/* List */}

      <div>
        {analyses.length === 0 ? (
          <div className="px-6 py-10 text-center">
            <p className="text-sm text-text-secondary">
              No analyses available yet.
            </p>
          </div>
        ) : (
          analyses.slice(0, 3).map((analysis) => (
            <div
              key={analysis.id}
              className="
                border-b
                border-border
                px-6
                py-5
                last:border-none
              "
            >
              <div className="flex items-center justify-between">
                <span
                  className={`
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    ${riskStyle(analysis.riskLevel)}
                  `}
                >
                  {analysis.riskLevel} Risk
                </span>

                <span className="text-xs text-text-secondary">
                  {new Date(analysis.analyzedAt).toLocaleDateString()}
                </span>
              </div>

              <p
                className="
                  mt-3
                  line-clamp-1
                  text-sm
                  text-text-primary
                "
              >
                {analysis.content}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Footer */}

      {analyses.length > 0 && (
        <div className="border-t border-border px-6 py-4">
          <Link
            to="/analysis-history"
            className="
              flex
              items-center
              justify-between
              font-medium
              text-primary
              transition
              hover:translate-x-1
            "
          >
            <span>View All Analyses</span>

            <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </section>
  );
}

export default RecentAnalyses;
