import { useEffect, useState } from "react";

import Card from "../ui/Card";

import { getAnalyses } from "../../utils/storage";

function RecentAnalyses() {
  const [analyses, setAnalyses] = useState([]);

  useEffect(() => {
    const savedAnalyses = getAnalyses();

    setAnalyses(savedAnalyses.slice(0, 5));
  }, []);

  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold">Recent Scam Analyses</h2>

      {analyses.length === 0 ? (
        <p className="text-slate-500">No analyses yet.</p>
      ) : (
        <div className="space-y-3">
          {analyses.map((analysis) => (
            <div
              key={analysis.id}
              className="
                flex items-center
                justify-between
                rounded-lg
                border
                p-3
              "
            >
              <span className="truncate">{analysis.content}</span>

              <span
                className="
                  text-sm
                  font-medium
                  text-red-600
                "
              >
                {analysis.riskLevel}
              </span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

export default RecentAnalyses;
