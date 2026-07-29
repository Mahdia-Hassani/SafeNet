import { useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import AnalysisResult from "../components/analyzer/AnalysisResult";

import { getAnalyses } from "../utils/storage";

function AnalysisReport() {
  const { id } = useParams();

  const analyses = getAnalyses();

  const analysis = analyses.find((item) => item.id === Number(id));

  if (!analysis) {
    return (
      <DashboardLayout>
        <div
          className="
            mx-auto
            max-w-3xl
            py-20
            text-center
          "
        >
          <h1
            className="
              text-3xl
              font-bold
              text-text-primary
            "
          >
            Analysis Not Found
          </h1>

          <p
            className="
              mt-3
              text-text-secondary
            "
          >
            The requested analysis could not be found.
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header */}

        <header>
          <h1
            className="
              text-3xl
              font-bold
              text-text-primary
            "
          >
            Analysis Report
          </h1>

          <p
            className="
              mt-2
              text-text-secondary
            "
          >
            Review the AI security assessment and recommended actions.
          </p>
        </header>

        {/* Result */}

        <AnalysisResult analysis={analysis} />
      </div>
    </DashboardLayout>
  );
}

export default AnalysisReport;
