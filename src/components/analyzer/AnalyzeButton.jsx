import { Search, LoaderCircle, ShieldCheck } from "lucide-react";

function AnalyzeButton({ loading, onAnalyze }) {
  return (
    <section
      className="
        border
        border-border
        bg-card
        shadow-sm
      "
    >
      <div
        className="
          flex
          flex-col
          gap-5

          px-6
          py-5

          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        {/* Left */}

        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              bg-primary
              text-white
            "
          >
            <ShieldCheck size={20} />
          </div>

          <div>
            <h3
              className="
                font-semibold
                text-text-primary
              "
            >
              Ready for Analysis
            </h3>

            <p
              className="
                mt-1
                text-sm
                text-text-secondary
              "
            >
              AI will inspect the submitted content and identify possible
              cybersecurity threats.
            </p>
          </div>
        </div>

        {/* Right */}

        <button
          onClick={onAnalyze}
          disabled={loading}
          className="
            flex
            items-center
            justify-center
            gap-3

            bg-primary

            px-7
            py-3

            font-medium
            text-white

            transition

            hover:opacity-90

            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? (
            <>
              <LoaderCircle size={18} className="animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Search size={18} />
              Analyze Content
            </>
          )}
        </button>
      </div>
    </section>
  );
}

export default AnalyzeButton;
