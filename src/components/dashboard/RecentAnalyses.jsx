import Card from "../ui/Card";

const analyses = [
  {
    id: 1,
    title: "Fake Bank Email",
    risk: "High Risk",
    date: "2 hours ago",
  },
  {
    id: 2,
    title: "Suspicious Delivery SMS",
    risk: "Medium Risk",
    date: "Yesterday",
  },
];

function RecentAnalyses() {
  return (
    <Card>
      <h2 className="text-xl font-semibold">Recent Scam Analyses</h2>

      <div className="mt-4 space-y-4">
        {analyses.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div>
              <h3 className="font-medium">{item.title}</h3>

              <p className="text-sm text-slate-500">{item.date}</p>
            </div>

            <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-600">
              {item.risk}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default RecentAnalyses;
