import { useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import { getAnalyses } from "../utils/storage";

import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Info,
  Calendar,
} from "lucide-react";

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

  const risk = analysis.riskLevel?.toLowerCase();

  const isHigh = risk === "high";

  const isMedium = risk === "medium";

  const riskStyle = isHigh
    ? {
        box: "border-red-200 bg-red-50",

        text: "text-red-600",

        icon: <ShieldAlert size={40} />,
      }
    : isMedium
      ? {
          box: "border-orange-200 bg-orange-50",

          text: "text-orange-600",

          icon: <AlertTriangle size={40} />,
        }
      : {
          box: "border-green-200 bg-green-50",

          text: "text-green-600",

          icon: <ShieldCheck size={40} />,
        };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Header */}

        <div>
          <h1 className="text-3xl font-bold">Analysis Report</h1>

          <p className="mt-2 text-slate-500">Detailed AI security assessment</p>
        </div>

        {/* Risk Card */}

        <div
          className={`
            rounded-2xl
            border
            p-6
            ${riskStyle.box}
          `}
        >
          <div className="flex items-center gap-4">
            <div className={riskStyle.text}>{riskStyle.icon}</div>

            <div>
              <h2
                className="
                text-2xl
                font-bold
                "
              >
                {analysis.riskLevel}
              </h2>

              <p className="text-slate-600">
                {analysis.indicators?.length || 0} warning indicators found
              </p>
            </div>
          </div>
        </div>

        {/* Original Content */}

        <ReportCard title="Original Content">
          <p
            className="
            whitespace-pre-wrap
            text-slate-600
            "
          >
            {analysis.content}
          </p>
        </ReportCard>

        {/* Indicators */}

        <ReportCard title="Warning Indicators">
          {analysis.indicators?.length > 0 ? (
            <div className="space-y-3">
              {analysis.indicators.map((indicator, index) => (
                <div
                  key={index}
                  className="
                      flex
                      items-center
                      gap-3
                      "
                >
                  <AlertTriangle size={18} className="text-orange-500" />

                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">No specific indicators detected.</p>
          )}
        </ReportCard>

        {/* Explanation */}

        <ReportCard title="Why This Is Risky">
          <p className="text-slate-600">{analysis.explanation}</p>
        </ReportCard>

        {/* Recommendation */}

        <ReportCard title="Recommended Actions">
          <p className="text-slate-600">{analysis.recommendation}</p>
        </ReportCard>

        {/* Metadata */}

        <ReportCard title="Analysis Information">
          <div
            className="
            space-y-3
            text-slate-600
            "
          >
            <p className="flex items-center gap-2">
              <Info size={18} />
              ID: {analysis.id}
            </p>

            <p className="flex items-center gap-2">
              <Calendar size={18} />

              {new Date(analysis.analyzedAt).toLocaleString()}
            </p>

            <p>
              <strong>Risk Level:</strong> {analysis.riskLevel}
            </p>
          </div>
        </ReportCard>
      </div>
    </DashboardLayout>
  );
}

function ReportCard({ title, children }) {
  return (
    <div
      className="
      rounded-2xl
      border
      bg-white
      p-6
      shadow-sm
      "
    >
      <h3
        className="
        font-semibold
        text-lg
        "
      >
        {title}
      </h3>

      <div className="mt-4">{children}</div>
    </div>
  );
}

export default AnalysisReport;
