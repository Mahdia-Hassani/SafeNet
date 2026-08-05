import { BrainCircuit, LockKeyhole, Zap, GraduationCap } from "lucide-react";

function SecurityTrust() {
  const trustItems = [
    {
      icon: BrainCircuit,

      title: "AI-Powered Analysis",

      description:
        "Advanced AI helps identify suspicious patterns and possible online threats.",
    },

    {
      icon: LockKeyhole,

      title: "Privacy Focused",

      description:
        "SafeNet is designed with user privacy and secure analysis in mind.",
    },

    {
      icon: Zap,

      title: "Fast Threat Detection",

      description:
        "Analyze messages, links and files quickly before risks grow.",
    },

    {
      icon: GraduationCap,

      title: "Security Education",

      description: "Understand threats and build safer digital habits.",
    },
  ];

  return (
    <section
      className="
      py-24

      bg-background
      "
    >
      <div
        className="
        max-w-7xl

        mx-auto

        px-6
        "
      >
        {/* Heading */}

        <div
          className="
          text-center

          max-w-3xl

          mx-auto

          mb-16
          "
        >
          <h2
            className="
            text-4xl

            lg:text-5xl

            font-semibold

            text-text-primary
            "
          >
            Security You Can Trust
          </h2>

          <p
            className="
            mt-5

            text-lg

            leading-relaxed

            text-text-secondary
            "
          >
            SafeNet combines AI analysis and security intelligence to help you
            stay protected online.
          </p>
        </div>

        {/* Trust Cards */}

        <div
          className="
          grid

          sm:grid-cols-2

          lg:grid-cols-4

          gap-6
          "
        >
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  p-7

                  rounded-2xl

                  border

                  border-border

                  bg-surface

                  transition

                  hover:border-primary

                  hover:-translate-y-1
                  "
              >
                <div
                  className="
                    w-14

                    h-14

                    rounded-xl

                    bg-primary/10

                    border

                    border-primary/20

                    flex

                    items-center

                    justify-center
                    "
                >
                  <Icon size={28} className="text-primary" />
                </div>

                <h3
                  className="
                    mt-6

                    text-xl

                    font-semibold

                    text-text-primary
                    "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3

                    text-base

                    leading-relaxed

                    text-text-secondary
                    "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SecurityTrust;
