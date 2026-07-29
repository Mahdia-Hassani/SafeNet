import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import AnalyzerHeader from "../components/analyzer/AnalyzerHeader";
import AnalyzerTabs from "../components/analyzer/AnalyzerTabs";
import AnalyzerInput from "../components/analyzer/AnalyzerInput";
import AnalyzeButton from "../components/analyzer/AnalyzeButton";

import { analyzeThreat } from "../services/openRouter";
import { saveAnalysis } from "../utils/storage";

function ScamAnalyzer() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("message");

  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleAnalyze() {
    if (activeTab === "message" && !message.trim()) {
      alert("Please enter a message.");
      return;
    }

    if (activeTab === "url" && !url.trim()) {
      alert("Please enter a URL.");
      return;
    }

    if (activeTab === "file" && !selectedFile) {
      alert("Please select a file.");
      return;
    }

    const content =
      activeTab === "message"
        ? message
        : activeTab === "url"
          ? url
          : selectedFile.name;

    try {
      setLoading(true);

      setError("");

      const aiResponse = await analyzeThreat(content);

      const analysis = {
        id: Date.now(),

        content,

        riskLevel: aiResponse.riskLevel,

        explanation: aiResponse.explanation,

        indicators: aiResponse.indicators,

        recommendation: aiResponse.recommendation,

        analyzedAt: new Date().toISOString(),
      };

      saveAnalysis(analysis);

      navigate(`/analysis/${analysis.id}`);
    } catch (err) {
      console.error(err);

      setError("AI analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <AnalyzerHeader />

        <AnalyzerTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <AnalyzerInput
          activeTab={activeTab}
          message={message}
          setMessage={setMessage}
          url={url}
          setUrl={setUrl}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />

        {error && (
          <div
            className="
              border
              border-red-200
              bg-red-50
              px-5
              py-4
              text-sm
              text-red-600
            "
          >
            {error}
          </div>
        )}

        <AnalyzeButton loading={loading} onAnalyze={handleAnalyze} />
      </div>
    </DashboardLayout>
  );
}

export default ScamAnalyzer;
