import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import { getRelativeTime } from "../../utils/date";
import { getAnalyses, deleteAnalysis } from "../../utils/storage";

function RecentAnalyses() {
  const [analyses, setAnalyses] = useState([]);

  const navigate = useNavigate();

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
        <div className="py-8 text-center">
          <p className="font-medium text-slate-700">No analyses yet</p>

          <p className="mt-2 text-sm text-slate-500">
            Analyze a message, URL, or file to start building your security
            history.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {analyses.map((analysis) => (
            <div
              key={analysis.id}
              onClick={() => navigate(`/analysis/${analysis.id}`)}
              className="
          flex items-center
          justify-between
          rounded-lg
          border
          p-3
          cursor-pointer
          transition-all
          hover:border-blue-300
          hover:bg-slate-50
        "
            >
              <div className="max-w-[70%]">
                <p className="truncate font-medium">{analysis.content}</p>

                <p className="text-xs text-slate-500">
                  {getRelativeTime(analysis.analyzedAt)}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`
              rounded-full px-2 py-1
              text-xs font-medium
              ${
                analysis.riskLevel === "High Risk"
                  ? "bg-red-100 text-red-700"
                  : analysis.riskLevel === "Medium Risk"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-green-100 text-green-700"
              }
            `}
                >
                  {analysis.riskLevel}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(analysis.id);
                  }}
                  className="
              text-sm
              text-slate-400
              transition-colors
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
