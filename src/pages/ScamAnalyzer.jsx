import { useState } from "react";

import {
  MessageSquare,
  Link2,
  FileText,
  Search,
  ShieldCheck,
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";
import Button from "../components/ui/Button";

function ScamAnalyzer() {
  const [activeTab, setActiveTab] = useState("message");

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

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl">
        {/* Header */}

        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Scam Analyzer</h1>

          <p className="mt-4 text-base text-slate-500">
            Analyze suspicious messages, URLs and files to identify potential
            threats.
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
            transition-all duration-200
            ${
              activeTab === tab.id
                ? "text-blue-600"
                : "text-slate-500 hover:text-slate-700"
            }
                `}
                >
                  <Icon size={20} />

                  <span className="font-medium">{tab.label}</span>

                  {activeTab === tab.id && (
                    <span
                      className="
                absolute
                bottom-0
                left-0
                w-full
                h-[2px]
                bg-blue-600
              "
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}

        <div className="mt-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-blue-100 bg-blue-50">
            <ShieldCheck size={34} className="text-blue-600" />
          </div>

          <h2 className="mt-6 text-xl font-semibold">
            {activeTab === "message" && "Paste suspicious content here"}

            {activeTab === "url" && "Enter suspicious URL"}

            {activeTab === "file" && "Upload file for analysis"}
          </h2>

          <p className="mt-2 text-slate-500">
            {activeTab === "message" &&
              "Emails, SMS, chat messages and other text content"}

            {activeTab === "url" &&
              "Check suspicious websites before opening them"}

            {activeTab === "file" && "Upload PDF, DOCX or other files"}
          </p>
        </div>

        {/* Dynamic Input */}

        <div className="mt-8">
          {activeTab === "message" && (
            <textarea
              rows="6"
              placeholder="Paste suspicious content here..."
              className="
                w-full rounded-xl border
                border-slate-200
                p-5
                outline-none
                focus:border-blue-500
              "
            />
          )}

          {activeTab === "url" && (
            <input
              type="text"
              placeholder="https://example.com"
              className="
                w-full rounded-xl border
                border-slate-200
                p-5
                outline-none
                focus:border-blue-500
              "
            />
          )}

          {activeTab === "file" && (
            <div
              className="
                rounded-xl border-2 border-dashed
                border-slate-300
                p-12 text-center
              "
            >
              <input type="file" />
            </div>
          )}
        </div>

        {/* Button */}

        <div className="mt-6 flex justify-center">
          <Button className="flex items-center gap-2 px-8 py-3">
            <Search size={18} />
            Analyze Content
          </Button>
        </div>

        {/* Footer Note */}

        <p className="mt-8 text-center text-sm text-slate-500">
          All analysis is private and secure. Your data will not be shared.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default ScamAnalyzer;
