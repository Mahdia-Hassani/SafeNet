import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

import AnalyzerTabs from "../components/analyzer/AnalyzerTabs";

function ScamAnalyzer() {
  const [activeTab, setActiveTab] = useState("message");

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold">Scam Analyzer</h1>

          <p className="mt-2 text-slate-500">
            Analyze suspicious messages, URLs and files.
          </p>
        </div>

        <Card>
          <div className="space-y-6">
            <AnalyzerTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "message" && (
              <textarea
                rows="8"
                placeholder="Paste suspicious email, SMS, or message..."
                className="
                  w-full rounded-xl border
                  p-4 outline-none
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
                  p-4 outline-none
                  focus:border-blue-500
                "
              />
            )}

            {activeTab === "file" && (
              <div className="rounded-xl border border-dashed p-8 text-center">
                <p className="text-slate-500">Upload a file for analysis</p>

                <input type="file" className="mt-4" />
              </div>
            )}

            <Button>Analyze Content</Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default ScamAnalyzer;
