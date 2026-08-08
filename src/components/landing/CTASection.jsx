import { useNavigate } from "react-router-dom";

function CTASection() {
  const navigate = useNavigate();

  return (
    <section
      className="
      py-28

      bg-background

      overflow-hidden

      relative
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute

        top-1/2
        left-1/2

        -translate-x-1/2
        -translate-y-1/2

        w-96
        h-96

        rounded-full

        bg-primary/20

        blur-3xl
        "
      />

      <div
        className="
        relative

        max-w-4xl

        mx-auto

        px-6

        text-center
        "
      >
        <h2
          className="
          text-4xl

          lg:text-5xl

          font-semibold

          leading-tight

          text-text-primary
          "
        >
          Stay Safe Online
          <br />
          With SafeNet
        </h2>

        <p
          className="
          mt-6

          max-w-2xl

          mx-auto

          text-lg

          leading-relaxed

          text-text-secondary
          "
        >
          Detect suspicious content, understand digital threats and build safer
          online habits with AI-powered security assistance.
        </p>

        <div
          className="
          mt-10

          flex

          flex-col

          sm:flex-row

          justify-center

          gap-4
          "
        >
          {/* Quick Analyzer */}

          <button
            onClick={() => navigate("/analyzer")}
            className="
            px-7
            py-3
            rounded-lg
            bg-primary
            text-white
            hover:bg-primary-hover
            transition
            "
          >
            Analyze a Threat
          </button>

          {/* Register */}

          <button
            onClick={() => navigate("/register")}
            className="
            px-7
            py-3

            rounded-lg

            border

            border-border

            text-text-primary

            hover:bg-surface

            transition
            "
          >
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
