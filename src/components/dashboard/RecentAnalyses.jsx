import { useEffect, useState } from "react";

import Card from "../ui/Card";

import { getAnalyses, deleteAnalysis } from "../../utils/storage";

function RecentAnalyses() {
  const [analyses, setAnalyses] = useState([]);

  function loadAnalyses() {
    const data = getAnalyses();

    setAnalyses(data.slice(0, 5));
  }

  useEffect(() => {
    loadAnalyses();
  }, []);

  function handleDelete(id) {
    deleteAnalysis(id);

    loadAnalyses();
  }

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
              <div className="max-w-[70%]">
                <p className="truncate font-medium">{analysis.content}</p>

                <p className="text-xs text-slate-500">
                  {new Date(analysis.analyzedAt).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className="
                    text-sm
                    font-medium
                    text-red-600
                  "
                >
                  {analysis.riskLevel}
                </span>

                <button
                  onClick={() => handleDelete(analysis.id)}
                  className="
                    text-sm
                    text-slate-400
                    hover:text-red-600
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

export default RecentAnalyses;
