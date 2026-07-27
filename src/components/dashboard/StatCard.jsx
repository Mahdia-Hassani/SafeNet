import Card from "../ui/Card";

function StatCard({ title, value, icon: Icon }) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-text-secondary">{title}</p>

          <h3 className="mt-2 text-3xl font-bold text-text-primary">{value}</h3>
        </div>

        <div
          className="
            rounded-md
            border
            border-border
            bg-surface
            p-3
          "
        >
          <Icon size={22} className="text-primary" />
        </div>
      </div>
    </Card>
  );
}

export default StatCard;
