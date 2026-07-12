import { useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import { getAnalyses } from "../utils/storage";

import { ShieldAlert, ShieldCheck, AlertTriangle } from "lucide-react";

function AnalysisReport() {
  const { id } = useParams();

  const analyses = getAnalyses();

  const analysis = analyses.find((item) => item.id === Number(id));

  if (!analysis) {
    return (
      <DashboardLayout>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Analysis Not Found</h1>

          <p className="mt-2 text-slate-500">This analysis does not exist.</p>
        </div>
      </DashboardLayout>
    );
  }

  const isHighRisk = analysis.riskLevel === "High Risk";

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Page Header */}

        <div>
          <h1 className="text-3xl font-bold">Analysis Report</h1>

          <p className="mt-2 text-slate-500">Detailed security assessment</p>
        </div>

        {/* Risk Summary */}

        <div
          className={`
            rounded-xl p-6 border
            ${
              isHighRisk
                ? "border-red-200 bg-red-50"
                : "border-green-200 bg-green-50"
            }
          `}
        >
          <div className="flex items-center gap-4">
            {isHighRisk ? (
              <ShieldAlert size={40} className="text-red-600" />
            ) : (
              <ShieldCheck size={40} className="text-green-600" />
            )}

            <div>
              <h2 className="text-2xl font-bold">{analysis.riskLevel}</h2>

              <p className="text-slate-600">
                {analysis.indicators.length} warning indicators found
              </p>
            </div>
          </div>
        </div>

        {/* Original Content */}

        <div className="rounded-xl border bg-white p-6">
          <h3 className="font-semibold">Original Content</h3>

          <p className="mt-4 whitespace-pre-wrap text-slate-600">
            {analysis.content}
          </p>
        </div>

        {/* Indicators */}

        <div className="rounded-xl border bg-white p-6">
          <h3 className="font-semibold">Warning Indicators</h3>

          <div className="mt-4 space-y-3">
            {analysis.indicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-3">
                <AlertTriangle size={18} className="text-amber-500" />

                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Explanation */}

        <div className="rounded-xl border bg-white p-6">
          <h3 className="font-semibold">Why This Is Risky</h3>

          <p className="mt-4 text-slate-600">{analysis.explanation}</p>
        </div>

        {/* Recommendation */}

        <div className="rounded-xl border bg-white p-6">
          <h3 className="font-semibold">Recommended Actions</h3>

          <p className="mt-4 text-slate-600">{analysis.recommendation}</p>
        </div>

        {/* Metadata */}

        <div className="rounded-xl border bg-white p-6">
          <h3 className="font-semibold">Analysis Information</h3>

          <div className="mt-4 space-y-2 text-slate-600">
            <p>
              <strong>ID:</strong> {analysis.id}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(analysis.analyzedAt).toLocaleString()}
            </p>

            <p>
              <strong>Risk Level:</strong> {analysis.riskLevel}
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AnalysisReport;
