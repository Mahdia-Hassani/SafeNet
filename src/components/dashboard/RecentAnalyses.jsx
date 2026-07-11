import Card from "../ui/Card";

const analyses = [
  {
    id: 1,
    title: "Fake Bank Email",
    risk: "High Risk",
  },
  {
    id: 2,
    title: "Suspicious Delivery SMS",
    risk: "Medium Risk",
  },
];

function RecentAnalyses() {
  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold">Recent Scam Analyses</h2>

      <div className="space-y-3">
        {analyses.map((analysis) => (
          <div
            key={analysis.id}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <span>{analysis.title}</span>

            <span className="text-sm text-red-600">{analysis.risk}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default RecentAnalyses;
