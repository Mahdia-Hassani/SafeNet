import { UploadCloud, BrainCircuit, ShieldCheck } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      number: "01",

      icon: UploadCloud,

      title: "Submit Suspicious Content",

      description:
        "Paste a message, URL or upload a file that looks suspicious.",
    },

    {
      number: "02",

      icon: BrainCircuit,

      title: "AI Analyzes The Threat",

      description:
        "SafeNet scans patterns and detects possible online threats.",
    },

    {
      number: "03",

      icon: ShieldCheck,

      title: "Get Security Advice",

      description: "Understand the risk and learn how to stay protected.",
    },
  ];

  return (
    <section
      id="how-it-works"
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
            How SafeNet Protects You
          </h2>

          <p
            className="
            mt-5

            text-lg

            text-text-secondary
            "
          >
            From detection to protection, SafeNet guides you through every step.
          </p>
        </div>

        <div
          className="
          grid

          lg:grid-cols-2

          gap-20

          items-center
          "
        >
          {/* Illustration */}

          <div
            className="
            flex

            justify-center
            "
          >
            <img
              src="/images/security-ai.png"
              alt="SafeNet AI Security"
              className="
              w-full

              max-w-md

              object-contain
              "
            />
          </div>

          {/* Timeline */}

          <div
            className="
            relative
            "
          >
            {/* Curved Line Desktop */}

            <svg
              className="
              hidden
              lg:block

              absolute

              left-5

              top-4

              h-[430px]

              w-20

              text-border
              "
              viewBox="0 0 100 500"
              fill="none"
            >
              <path
                d="
                M70 0
                C20 120,
                100 220,
                40 500
                "
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>

            <div
              className="
              space-y-12
              "
            >
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="
                      relative

                      flex

                      gap-6

                      items-start
                      "
                  >
                    {/* Number */}

                    <div
                      className="
                        shrink-0

                        w-12
                        h-12

                        rounded-full

                        bg-background

                        border
                        border-border

                        flex

                        items-center

                        justify-center

                        text-sm

                        font-semibold

                        text-primary

                        z-10
                        "
                    >
                      {step.number}
                    </div>

                    <div>
                      <div
                        className="
                          flex

                          items-center

                          gap-3
                          "
                      >
                        <Icon
                          size={22}
                          className="
                            text-primary
                            "
                        />

                        <h3
                          className="
                            text-xl

                            font-semibold

                            text-text-primary
                            "
                        >
                          {step.title}
                        </h3>
                      </div>

                      <p
                        className="
                          mt-3

                          text-base

                          leading-relaxed

                          text-text-secondary

                          max-w-md
                          "
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
