import Card from "../ui/Card";

function StatCard({ title, value, icon: Icon }) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h3 className="mt-2 text-3xl font-bold">{value}</h3>
        </div>

        <div className="rounded-xl bg-blue-50 p-3">
          <Icon size={22} className="text-blue-600" />
        </div>
      </div>
    </Card>
  );
}

export default StatCard;
