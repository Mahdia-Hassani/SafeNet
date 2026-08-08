import { Fish, ShieldAlert, Globe, KeyRound, ArrowRight } from "lucide-react";

function LearningPreview() {
  const lessons = [
    {
      number: "01",
      icon: ShieldAlert,
      title: "Phishing Awareness",
      description:
        "Learn how attackers use fake messages and emails to steal information.",
    },
    {
      number: "02",
      icon: Fish,
      title: "Online Scams",
      description:
        "Recognize common scam patterns and the warning signs you should never ignore.",
    },
    {
      number: "03",
      icon: Globe,
      title: "Safe Browsing",
      description:
        "Discover how to identify suspicious websites, links, and online behavior.",
    },
    {
      number: "04",
      icon: KeyRound,
      title: "Password Safety",
      description:
        "Build better habits for protecting your accounts and personal information.",
    },
  ];

  return (
    <section
      id="learning"
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
            max-w-3xl
            mx-auto
            text-center
            mb-16
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
            Learn Before You Get Caught
          </h2>

          <p
            className="
              mt-5
              text-lg
              leading-relaxed
              text-text-secondary
            "
          >
            Build the knowledge you need to recognize threats, avoid scams, and
            stay safer online.
          </p>
        </div>

        {/* Learning Path */}

        <div
          className="
            relative
            max-w-5xl
            mx-auto
          "
        >
          {/* Path Line */}

          <div
            className="
              hidden
              md:block
              absolute
              left-1/2
              top-6
              bottom-6
              w-px
              bg-border
            "
          />

          <div className="space-y-10">
            {lessons.map((lesson, index) => {
              const Icon = lesson.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={lesson.number}
                  className="
                    relative
                    grid
                    md:grid-cols-2
                    items-center
                  "
                >
                  {/* Lesson */}

                  <div
                    className={`
                      ${
                        isLeft
                          ? "md:pr-16 md:text-right"
                          : "md:col-start-2 md:pl-16"
                      }
                    `}
                  >
                    <div
                      className="
                        group
                        py-5
                        transition-transform
                        duration-300
                        hover:-translate-y-1
                      "
                    >
                      <div
                        className={`
                          flex
                          items-center
                          gap-3
                          ${isLeft ? "md:justify-end" : "justify-start"}
                        `}
                      >
                        <span
                          className="
                            text-sm
                            font-semibold
                            text-primary
                          "
                        >
                          {lesson.number}
                        </span>

                        <Icon
                          size={22}
                          className="
                            text-primary
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        />
                      </div>

                      <h3
                        className="
                          mt-3
                          text-xl
                          font-semibold
                          text-text-primary
                        "
                      >
                        {lesson.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-base
                          leading-relaxed
                          text-text-secondary
                        "
                      >
                        {lesson.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Point */}

                  <div
                    className="
                      hidden
                      md:flex
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-11
                      h-11
                      rounded-full
                      bg-background
                      border
                      border-border
                      items-center
                      justify-center
                      z-10
                    "
                  >
                    <div
                      className="
                        w-2.5
                        h-2.5
                        rounded-full
                        bg-primary
                      "
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}

        <div
          className="
            mt-14
            flex
            justify-center
          "
        >
          <button
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-primary
              hover:text-primary-hover
              transition
            "
          >
            Explore Learning Center
            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default LearningPreview;
