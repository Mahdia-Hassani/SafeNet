import {
  BrainCircuit,
  LockKeyhole,
  Zap,
  GraduationCap,
  ShieldCheck,
  Check,
} from "lucide-react";

function SecurityTrust() {
  const trustItems = [
    {
      number: "01",
      icon: BrainCircuit,
      title: "AI-Powered Analysis",
      description:
        "Advanced AI helps identify suspicious patterns and possible online threats.",
    },
    {
      number: "02",
      icon: LockKeyhole,
      title: "Privacy Focused",
      description:
        "SafeNet is designed with privacy and secure analysis in mind.",
    },
    {
      number: "03",
      icon: Zap,
      title: "Fast Threat Detection",
      description:
        "Analyze messages, links and files quickly before risks grow.",
    },
    {
      number: "04",
      icon: GraduationCap,
      title: "Security Education",
      description: "Understand threats and build safer digital habits.",
    },
  ];

  return (
    <section
      id="security"
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
            SafeNet combines intelligent analysis, privacy-focused design, and
            security education to help you navigate the digital world with
            confidence.
          </p>
        </div>

        {/* Main Content */}

        <div
          className="
            grid
            lg:grid-cols-[0.9fr_1.1fr]
            gap-16
            lg:gap-24
            items-center
          "
        >
          {/* Security Visual */}

          <div
            className="
              relative
              min-h-[390px]
              flex
              items-center
              justify-center
            "
          >
            {/* Outer Ring */}

            <div
              className="
                absolute
                w-72
                h-72
                lg:w-80
                lg:h-80
                rounded-full
                border
                border-border
                opacity-70
              "
            />

            {/* Middle Ring */}

            <div
              className="
                absolute
                w-56
                h-56
                lg:w-64
                lg:h-64
                rounded-full
                border
                border-primary/20
                border-dashed
              "
            />

            {/* Security Core */}

            <div
              className="
                relative
                w-32
                h-32
                rounded-full
                bg-primary/10
                border
                border-primary/30
                flex
                items-center
                justify-center
                shadow-lg
                shadow-primary/10
              "
            >
              <ShieldCheck
                size={64}
                strokeWidth={1.5}
                className="text-primary"
              />

              {/* Pulse */}

              <span
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-primary/20
                  animate-ping
                "
              />
            </div>

            {/* Top Point */}

            <div
              className="
                absolute
                top-10
                left-1/2
                -translate-x-1/2
                w-10
                h-10
                rounded-full
                bg-background
                border
                border-border
                flex
                items-center
                justify-center
              "
            >
              <Check size={18} className="text-primary" />
            </div>

            {/* Right Point */}

            <div
              className="
                absolute
                right-10
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-full
                bg-background
                border
                border-border
                flex
                items-center
                justify-center
              "
            >
              <LockKeyhole size={18} className="text-primary" />
            </div>

            {/* Bottom Point */}

            <div
              className="
                absolute
                bottom-10
                left-1/2
                -translate-x-1/2
                w-10
                h-10
                rounded-full
                bg-background
                border
                border-border
                flex
                items-center
                justify-center
              "
            >
              <BrainCircuit size={18} className="text-primary" />
            </div>

            {/* Left Point */}

            <div
              className="
                absolute
                left-10
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-full
                bg-background
                border
                border-border
                flex
                items-center
                justify-center
              "
            >
              <Zap size={18} className="text-primary" />
            </div>
          </div>

          {/* Trust Items */}

          <div className="space-y-2">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="
                    group
                    relative
                    flex
                    gap-5
                    py-6
                    border-b
                    border-border
                    transition
                  "
                >
                  {/* Number */}

                  <div
                    className="
                      shrink-0
                      w-10
                      h-10
                      flex
                      items-center
                      justify-center
                      text-sm
                      font-semibold
                      text-primary
                      border
                      border-border
                      rounded-full
                      group-hover:border-primary
                      transition
                    "
                  >
                    {item.number}
                  </div>

                  {/* Icon */}

                  <div
                    className="
                      shrink-0
                      w-10
                      h-10
                      flex
                      items-center
                      justify-center
                      text-primary
                    "
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                      className="
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Content */}

                  <div>
                    <h3
                      className="
                        text-xl
                        font-semibold
                        text-text-primary
                        transition
                        group-hover:text-primary
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-xl
                        text-base
                        leading-relaxed
                        text-text-secondary
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Message */}

        <div
          className="
            mt-20
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-3
            text-sm
            text-text-secondary
            text-center
          "
        >
          <ShieldCheck size={18} className="text-primary shrink-0" />

          <span>
            Designed to help you understand threats before they become risks.
          </span>
        </div>
      </div>
    </section>
  );
}

export default SecurityTrust;
