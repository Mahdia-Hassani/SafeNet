import {
  ShieldCheck,
  Search,
  GraduationCap,
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

function Features() {
  const features = [
    {
      number: "01",
      icon: ShieldCheck,
      title: "AI Threat Detection",
      description:
        "Analyze suspicious messages, links and files to detect possible online threats.",
    },
    {
      number: "02",
      icon: Search,
      title: "Threat Explanation",
      description:
        "Understand why something is risky and learn how to recognize warning signs.",
    },
    {
      number: "03",
      icon: GraduationCap,
      title: "Security Coaching",
      description:
        "Build safer digital habits through personalized cybersecurity guidance.",
    },
  ];

  return (
    <section
      id="features"
      className="
        py-24
        lg:py-32
        bg-background
        scroll-mt-24
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
            max-w-3xl
            mx-auto
            text-center
            mb-20
          "
        >
          <h2
            className="
              mt-3
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
              leading-relaxed
              text-text-secondary
            "
          >
            Everything you need to identify threats, understand the risks, and
            make safer decisions online.
          </p>
        </div>

        {/* Main Feature Area */}

        <div
          className="
            grid
            lg:grid-cols-[1fr_1.1fr]
            gap-12
            lg:gap-20
            items-center
          "
        >
          {/* Threat Analysis Visual */}

          <div
            className="
              relative
              min-h-[430px]

              flex
              items-center
              justify-center
            "
          >
            {/* Background Grid */}

            <div
              className="
                absolute
                inset-0
                opacity-40

                bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]
                bg-[size:40px_40px]

                mask-[radial-gradient(circle_at_center,black,transparent_72%)]
              "
            />

            {/* Analysis Panel */}

            <div
              className="
                relative
                w-full
                max-w-md

                border
                border-border

                bg-surface

                p-6

                shadow-xl
                shadow-primary/5
              "
            >
              {/* Panel Header */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  pb-5

                  border-b
                  border-border
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      w-10
                      h-10
                      rounded-lg

                      bg-primary/10

                      flex
                      items-center
                      justify-center
                    "
                  >
                    <ShieldCheck size={22} className="text-primary" />
                  </div>

                  <div>
                    <p
                      className="
                        text-sm
                        font-semibold
                        text-text-primary
                      "
                    >
                      Threat Analysis
                    </p>

                    <p
                      className="
                        text-xs
                        text-text-secondary
                      "
                    >
                      SafeNet Scanner
                    </p>
                  </div>
                </div>

                <span
                  className="
                    flex
                    items-center
                    gap-1.5

                    text-xs
                    font-medium
                    text-primary
                  "
                >
                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-primary
                      animate-pulse
                    "
                  />
                  Active
                </span>
              </div>

              {/* Suspicious Content */}

              <div className="py-6">
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-3
                  "
                >
                  <AlertTriangle size={19} className="text-primary" />

                  <span
                    className="
                      text-sm
                      font-medium
                      text-text-primary
                    "
                  >
                    Suspicious content detected
                  </span>
                </div>

                <div
                  className="
                    h-2
                    w-full
                    bg-background
                    overflow-hidden
                  "
                >
                  <div
                    className="
                      h-full
                      w-[78%]
                      bg-primary
                    "
                  />
                </div>

                <div
                  className="
                    mt-2

                    flex
                    justify-between

                    text-xs
                    text-text-secondary
                  "
                >
                  <span>Risk analysis</span>
                  <span>78%</span>
                </div>
              </div>

              {/* Findings */}

              <div className="space-y-3">
                <div
                  className="
                    flex
                    items-center
                    gap-3

                    p-3

                    border
                    border-border
                  "
                >
                  <CheckCircle2 size={18} className="text-primary" />

                  <span
                    className="
                      text-sm
                      text-text-secondary
                    "
                  >
                    Suspicious link pattern
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-3

                    p-3

                    border
                    border-border
                  "
                >
                  <CheckCircle2 size={18} className="text-primary" />

                  <span
                    className="
                      text-sm
                      text-text-secondary
                    "
                  >
                    Urgency-based language
                  </span>
                </div>
              </div>

              {/* Result */}

              <div
                className="
                  mt-6
                  pt-5

                  border-t
                  border-border

                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-sm
                    text-text-secondary
                  "
                >
                  Analysis result
                </span>

                <span
                  className="
                    text-sm
                    font-semibold
                    text-primary
                  "
                >
                  Needs Attention
                </span>
              </div>
            </div>
          </div>

          {/* Feature List */}

          <div>
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
                  className="
                    group

                    relative

                    py-8

                    border-b
                    border-border

                    first:border-t

                    transition
                  "
                >
                  <div
                    className="
                      flex
                      gap-5
                    "
                  >
                    {/* Number */}

                    <span
                      className="
                        shrink-0

                        pt-1

                        text-sm
                        font-semibold
                        text-primary
                      "
                    >
                      {feature.number}
                    </span>

                    {/* Icon */}

                    <div
                      className="
                        shrink-0

                        w-11
                        h-11

                        flex
                        items-center
                        justify-center

                        rounded-lg

                        border
                        border-border

                        text-primary

                        transition

                        group-hover:border-primary
                        group-hover:bg-primary/10
                      "
                    >
                      <Icon size={22} />
                    </div>

                    {/* Content */}

                    <div className="flex-1">
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          gap-4
                        "
                      >
                        <h3
                          className="
                            text-xl
                            font-semibold
                            text-text-primary

                            transition

                            group-hover:text-primary
                          "
                        >
                          {feature.title}
                        </h3>

                        <ArrowUpRight
                          size={20}
                          className="
                            shrink-0

                            text-text-secondary

                            transition

                            group-hover:text-primary
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                          "
                        />
                      </div>

                      <p
                        className="
                          mt-3
                          max-w-lg

                          text-base
                          leading-relaxed

                          text-text-secondary
                        "
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}

        <div
          className="
            mt-20

            flex
            items-center
            justify-center
            gap-3

            text-sm
            text-text-secondary
            text-center
          "
        >
          <ShieldCheck size={18} className="text-primary" />

          <span>
            One place to detect, understand, and respond to online threats.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Features;
