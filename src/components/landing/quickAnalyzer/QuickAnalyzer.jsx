import { useState } from "react";

import AnalyzerTabs from "./AnalyzerTabs";
import MessageInput from "./MessageInput";
import UrlInput from "./UrlInput";
import FileUpload from "./FileUpload";

function QuickAnalyzer() {
  const [activeTab, setActiveTab] = useState("message");

  const [inputValue, setInputValue] = useState("");

  function handleAnalyze() {
    console.log({
      type: activeTab,
      content: inputValue,
    });

    // بعداً Navigate به Result Page
  }

  return (
    <section className="py-24 bg-background">
      <div
        className="
        max-w-4xl
        mx-auto
        px-6
        "
      >
        {/* Header */}

        <div className="text-center mb-12">
          <h2
            className="
            text-4xl
            font-bold
            text-text-primary
            "
          >
            SafeNet AI Analyzer
          </h2>

          <p
            className="
            mt-4
            text-text-secondary
            "
          >
            Analyze suspicious messages, URLs and files before they become
            threats.
          </p>
        </div>

        {/* Tabs */}

        <AnalyzerTabs
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);

            setInputValue("");
          }}
        />

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

        {/* Button */}

        <div className="flex justify-center mt-8">
          <button
            onClick={handleAnalyze}
            className="
            px-10
            py-3

            rounded-xl

            bg-primary

            text-white

            font-medium

            hover:bg-primary-hover

            transition
            "
          >
            Analyze with AI
          </button>
        </div>
      </div>
    </section>
  );
}

export default QuickAnalyzer;
