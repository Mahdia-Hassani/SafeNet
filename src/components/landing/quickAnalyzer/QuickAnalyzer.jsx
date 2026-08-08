import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, LockKeyhole, ArrowRight } from "lucide-react";

import AnalyzerTabs from "./AnalyzerTabs";
import MessageInput from "./MessageInput";
import UrlInput from "./UrlInput";
import FileUpload from "./FileUpload";

function QuickAnalyzer() {
  const [activeTab, setActiveTab] = useState("message");
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  function handleAnalyze() {
    if (!inputValue.trim()) {
      return;
    }

    navigate("/analyzer", {
      state: {
        type: activeTab,
        content: inputValue,
      },
    });
  }

  function handleTabChange(tab) {
    setActiveTab(tab);
    setInputValue("");
  }

  return (
    <section
      id="quick-analyzer"
      className="
        py-24
        lg:py-32
        bg-background
        scroll-mt-24
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          px-6
        "
      >
        {/* Header */}

        <div
          className="
            max-w-3xl
            mx-auto
            text-center
            mb-12
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2

              rounded-full

              border
              border-primary/20

              bg-primary/5

              text-sm
              font-medium
              text-primary
            "
          >
            <ShieldCheck size={17} />
            Try SafeNet
          </div>

          <h2
            className="
              mt-6

              text-4xl
              lg:text-5xl

              font-semibold

              text-text-primary
            "
          >
            Check Something Suspicious
          </h2>

          <p
            className="
              mt-5

              text-lg
              leading-relaxed

              text-text-secondary
            "
          >
            Paste a suspicious message, check a URL, or upload a file and
            continue with SafeNet's security analyzer.
          </p>
        </div>

        {/* Analyzer */}

        <div
          className="
            relative

            border
            border-border

            bg-surface

            p-6
            sm:p-8
            lg:p-10

            shadow-xl
            shadow-primary/5
          "
        >
          {/* Top Status */}

          <div
            className="
              flex
              items-center
              justify-between

              pb-5
              mb-6

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
                  SafeNet Analyzer
                </p>

                <p
                  className="
                    text-xs
                    text-text-secondary
                  "
                >
                  Ready to scan
                </p>
              </div>
            </div>

            <div
              className="
                flex
                items-center
                gap-2

                text-xs
                text-text-secondary
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
              Scanner ready
            </div>
          </div>

          {/* Tabs */}

          <AnalyzerTabs activeTab={activeTab} setActiveTab={handleTabChange} />

          {/* Input */}

          <div className="mt-8">
            {activeTab === "message" && (
              <MessageInput value={inputValue} setValue={setInputValue} />
            )}

            {activeTab === "url" && (
              <UrlInput value={inputValue} setValue={setInputValue} />
            )}

            {activeTab === "file" && <FileUpload setValue={setInputValue} />}
          </div>

          {/* Action */}

          <div
            className="
              mt-8

              flex
              flex-col
              sm:flex-row

              items-center
              justify-between

              gap-5
            "
          >
            <div
              className="
                flex
                items-center
                gap-2

                text-xs

                text-text-secondary
              "
            >
              <LockKeyhole size={15} className="text-primary" />
              Analyze suspicious content safely.
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!inputValue.trim()}
              className="
                group

                w-full
                sm:w-auto

                px-7
                py-3

                rounded-xl

                bg-primary

                text-white

                text-sm
                font-medium

                flex
                items-center
                justify-center
                gap-2

                hover:bg-primary-hover

                disabled:opacity-50
                disabled:cursor-not-allowed

                transition
              "
            >
              Analyze with AI
              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>
        </div>

        {/* Bottom Note */}

        <p
          className="
            mt-5

            text-center

            text-xs

            text-text-secondary
          "
        >
          No account required to start analyzing suspicious content.
        </p>
      </div>
    </section>
  );
}

export default QuickAnalyzer;
