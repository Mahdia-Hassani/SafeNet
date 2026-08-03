import { Trophy, Lock, Award, ShieldCheck } from "lucide-react";

function Achievements({ achievements = [] }) {
  const icons = {
    trophy: Trophy,
    award: Award,
    shield: ShieldCheck,
  };

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
          Achievements
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          Earn badges while learning.
        </p>
      </div>

      <div className="grid gap-5 p-6 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((badge) => {
          const Icon = icons[badge.icon] || Trophy;

          return (
            <div
              key={badge.id}
              className={`
                border
                p-5
                transition
                ${
                  badge.unlocked
                    ? "border-border bg-card"
                    : "border-border bg-muted opacity-60"
                }
              `}
            >
              <div
                className="
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  bg-primary/10
                  text-primary
                "
              >
                {badge.unlocked ? <Icon size={24} /> : <Lock size={22} />}
              </div>

              <h3 className="font-semibold text-text-primary">{badge.title}</h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {badge.description}
              </p>

              <div className="mt-5">
                {badge.unlocked ? (
                  <span className="text-sm font-medium text-green-600">
                    Unlocked
                  </span>
                ) : (
                  <span className="text-sm text-text-secondary">Locked</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Achievements;
