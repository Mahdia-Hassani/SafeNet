import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function LearningProgress({ completedLessons, totalLessons, percentage }) {
  return (
    <section className="border border-border bg-card shadow-sm">
      <div className="border-b border-border px-6 py-5">
        <h2 className="text-lg font-semibold text-text-primary">
          Learning Progress
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          Continue your cybersecurity learning journey.
        </p>
      </div>

      <div className="p-6">
        {/* Top */}

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-text-secondary">Lessons Completed</p>

            <h3 className="mt-2 text-4xl font-bold text-text-primary">
              {completedLessons}
              <span className="ml-2 text-xl font-medium text-text-secondary">
                / {totalLessons}
              </span>
            </h3>
          </div>

          <div className="flex h-16 w-16 items-center justify-center bg-primary/10 text-primary">
            <BookOpen size={30} />
          </div>
        </div>

        {/* Progress */}

        <div className="mt-8">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-text-secondary">
              Overall Progress
            </span>

            <span className="font-semibold text-primary">{percentage}%</span>
          </div>

          <div className="h-2 overflow-hidden bg-border">
            <div
              className="h-full bg-primary transition-all duration-500"
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
          <span className="font-medium">Continue Learning</span>

          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export default LearningProgress;
