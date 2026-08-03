import { ArrowUpRight } from "lucide-react";

function StatCard({ title, value, icon: Icon, color = "text-primary" }) {
  return (
    <div
      className="
        border
        border-border
        bg-card
        p-6
        transition
        hover:shadow-sm
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            {title}
          </p>

          <h3
            className="
              mt-3
              text-3xl
              font-bold
              text-text-primary
            "
          >
            {value}
          </h3>
        </div>

        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            bg-primary/10
            ${color}
          `}
        >
          <Icon size={24} />
        </div>
      </div>

      <div
        className="
          mt-6
          flex
          items-center
          gap-2
          text-sm
          text-text-secondary
        "
      >
        <ArrowUpRight size={16} />

        <span>Updated recently</span>
      </div>
    </div>
  );
}

export default StatCard;
