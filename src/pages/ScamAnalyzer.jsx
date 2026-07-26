import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MessageSquare,
  Link2,
  FileText,
  Search,
  ShieldCheck,
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";
import Button from "../components/ui/Button";

import { analyzeThreat } from "../services/openRouter";
import { saveAnalysis } from "../utils/storage";

function ScamAnalyzer() {
  const [activeTab, setActiveTab] = useState("message");

  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const tabs = [
    {
      id: "message",
      label: "Message",
      icon: MessageSquare,
    },
    {
      id: "url",
      label: "URL",
      icon: Link2,
    },
    {
      id: "file",
      label: "File",
      icon: FileText,
    },
  ];

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
    } catch (error) {
      console.error(error);

      setError("AI analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl">
        {/* Header */}

        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Scam Analyzer</h1>

          <p className="mt-4 text-slate-500">
            Analyze suspicious messages, URLs and files to identify threats.
          </p>
        </div>

        {/* Tabs */}

        <div className="mt-8 border-b border-slate-200">
          <div className="flex justify-center gap-10">
            {tabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative flex items-center gap-2 py-4
                    ${activeTab === tab.id ? "text-blue-600" : "text-slate-500"}
                  `}
                >
                  <Icon size={20} />

                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Icon */}

        <div className="mt-8 text-center">
          <div
            className="
              mx-auto flex h-20 w-20
              items-center justify-center
              rounded-full
              bg-blue-50
              text-blue-600
            "
          >
            <ShieldCheck size={34} />
          </div>
        </div>

        {/* Input */}

        <div className="mt-8">
          {activeTab === "message" && (
            <textarea
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Paste suspicious content here..."
              className="
                w-full rounded-xl border
                p-5 outline-none
                focus:border-blue-500
              "
            />
          )}

          {activeTab === "url" && (
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="
                w-full rounded-xl border
                p-5 outline-none
                focus:border-blue-500
              "
            />
          )}

          {activeTab === "file" && (
            <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          )}
        </div>

        {/* Error */}

        {error && <p className="mt-4 text-center text-red-500">{error}</p>}

        {/* Button */}

        <div className="mt-6 flex justify-center">
          <Button
            onClick={handleAnalyze}
            disabled={loading}
            className="flex items-center gap-2 px-8 py-3"
          >
            <Search size={18} />

            {loading ? "Analyzing..." : "Analyze Content"}
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ScamAnalyzer;
