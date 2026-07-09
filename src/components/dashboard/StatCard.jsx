import Card from "../ui/Card";

function StatCard({ title, value }) {
  return (
    <Card>
      <p className="text-sm text-slate-500">{title}</p>

      <h3 className="mt-2 text-3xl font-bold">{value}</h3>
    </Card>
  );
}

export default StatCard;
