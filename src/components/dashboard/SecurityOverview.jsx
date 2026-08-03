import { BookOpen, Target, ShieldAlert, Activity } from "lucide-react";

function SecurityOverview({
  lessons,
  simulations,
  analyses,
  risk = "Low Risk",
}) {
  const items = [
    {
      title: "Learning",
      value: `${lessons}`,
      label: "Lessons Completed",
      icon: BookOpen,
    },

    {
      title: "Simulation",
      value: `${simulations}`,
      label: "Completed",
      icon: Target,
    },

    {
      title: "Threat Analysis",
      value: `${analyses}`,
      label: "Reports",
      icon: ShieldAlert,
    },

    {
      title: "Protection",
      value: risk,
      label: "Current Status",
      icon: Activity,
    },
  ];

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
        <h2
          className="
          text-xl
          font-bold
          text-text-primary
          "
        >
          Security Overview
        </h2>

        <p
          className="
          mt-2
          text-sm
          text-text-secondary
          "
        >
          Track your cybersecurity journey across SafeNet.
        </p>
      </div>

      {/* Content */}

      <div
        className="
        grid
        gap-5
        p-6
        sm:grid-cols-2
        "
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                flex
                items-center
                gap-4
                border
                border-border
                p-4
                "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  bg-primary/10
                  text-primary
                  "
              >
                <Icon size={22} />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    text-text-secondary
                    "
                >
                  {item.title}
                </p>

                <h3
                  className="
                    mt-1
                    text-xl
                    font-bold
                    text-text-primary
                    "
                >
                  {item.value}
                </h3>

                <p
                  className="
                    text-xs
                    text-text-secondary
                    "
                >
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SecurityOverview;
