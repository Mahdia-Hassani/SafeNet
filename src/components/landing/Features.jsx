import { ShieldCheck, Search, GraduationCap } from "lucide-react";

function Features() {
  const features = [
    {
      icon: ShieldCheck,

      title: "AI Threat Detection",

      description:
        "Analyze suspicious messages, links and files to detect possible online threats.",
    },

    {
      icon: Search,

      title: "Threat Explanation",

      description:
        "Understand why something is risky and learn how to recognize warning signs.",
    },

    {
      icon: GraduationCap,

      title: "Security Coaching",

      description:
        "Build safer digital habits through personalized cybersecurity guidance.",
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
            Powerful Security Features
          </h2>

          <p
            className="
            mt-5

            text-lg

            text-text-secondary

            leading-relaxed
            "
          >
            SafeNet combines AI analysis and security education to help you stay
            protected online.
          </p>
        </div>

        {/* Features */}

        <div
          className="
          grid

          md:grid-cols-3

          gap-6
          "
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group

                  p-8

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
                  <Icon
                    size={28}
                    className="
                      text-primary
                      "
                  />
                </div>

                <h3
                  className="
                    mt-6

                    text-xl

                    font-semibold

                    text-text-primary
                    "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-3

                    text-base

                    leading-relaxed

                    text-text-secondary
                    "
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
