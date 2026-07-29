import { ShieldCheck, Sparkles } from "lucide-react";

function AnalyzerHeader() {
  return (
    <section
      className="
        border
        border-border
        bg-card
        shadow-sm
      "
    >
      <div className="flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}

        <div className="flex items-start gap-5">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center

              bg-primary
              text-white
            "
          >
            <ShieldCheck size={28} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-primary" />

              <span
                className="
                  text-sm
                  font-medium
                  text-primary
                "
              >
                AI Security Scanner
              </span>
            </div>

            <h1
              className="
                mt-2
                text-3xl
                font-bold
                text-text-primary
              "
            >
              Scam Analyzer
            </h1>

            <p
              className="
                mt-3
                max-w-2xl
                leading-7
                text-text-secondary
              "
            >
              Analyze suspicious messages, phishing emails, websites and
              uploaded files using AI. SafeNet explains why something is risky
              and provides practical recommendations to help you stay safe
              online.
            </p>
          </div>
        </div>

        {/* Right */}

        <div
          className="
            border
            border-border
            bg-surface
            px-6
            py-5
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-wide
              text-text-secondary
            "
          >
            Supported Inputs
          </p>

          <div className="mt-4 space-y-2 text-sm text-text-primary">
            <p>• Messages & Emails</p>

            <p>• URLs & Websites</p>

            <p>• Documents & Files</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnalyzerHeader;
