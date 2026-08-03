import { ShieldCheck, BookOpen, Target, ShieldAlert } from "lucide-react";

function SafetyScore({
  score = 0,
  completedLessons = 0,
  completedSimulations = 0,
  threatAnalyses = 0,
}) {
  return (
    <section
      className="
        h-full
        border
        border-border
        bg-card
        shadow-sm
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
        <h2 className="text-lg font-semibold text-text-primary">
          Security Score
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          Your cybersecurity progress
        </p>
      </div>

      {/* Score */}

      <div className="px-6 py-8">
        <div className="flex items-end gap-2">
          <span
            className="
              text-5xl
              font-bold
              text-text-primary
            "
          >
            {score}
          </span>

          <span
            className="
              mb-2
              text-text-secondary
            "
          >
            /100
          </span>
        </div>

        <div
          className="
            mt-5
            h-2
            w-full
            overflow-hidden
            bg-slate-100
          "
        >
          <div
            className="
              h-full
              bg-primary
              transition-all
            "
            style={{
              width: `${score}%`,
            }}
          />
        </div>

        <p
          className="
            mt-3
            text-sm
            font-medium
            text-primary
          "
        >
          {score >= 80
            ? "Excellent Security Level"
            : score >= 50
              ? "Good Progress"
              : "Keep Improving"}
        </p>
      </div>

      {/* Stats */}

      <div
        className="
          grid
          grid-cols-2
          gap-4
          border-t
          border-border
          px-6
          py-6
        "
      >
        <MiniStat icon={BookOpen} label="Lessons" value={completedLessons} />

        <MiniStat
          icon={Target}
          label="Simulations"
          value={completedSimulations}
        />

        <MiniStat icon={ShieldAlert} label="Analyses" value={threatAnalyses} />

        <MiniStat
          icon={ShieldCheck}
          label="Status"
          value={score >= 70 ? "Safe" : "Risk"}
        />
      </div>
    </section>
  );
}

function MiniStat({ icon: Icon, label, value }) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
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

      <div>
        <p
          className="
            text-xs
            text-text-secondary
          "
        >
          {label}
        </p>

        <p
          className="
            font-semibold
            text-text-primary
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export default SafetyScore;
