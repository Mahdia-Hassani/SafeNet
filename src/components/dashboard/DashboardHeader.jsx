import { CalendarDays, Clock3 } from "lucide-react";

function DashboardHeader({
  userName = "User",
  greeting = "Welcome Back",
  lastLogin,
}) {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section
      className="
        border
        border-border
        bg-card
        shadow-sm
      "
    >
      <div className="flex items-start justify-between p-8">
        <div>
          <p className="text-sm font-medium text-primary">{greeting}</p>

          <h1 className="mt-2 text-4xl font-bold text-text-primary">
            {userName}
          </h1>

          <p className="mt-4 max-w-xl leading-7 text-text-secondary">
            Continue improving your cybersecurity awareness, monitor your
            learning progress, complete simulations, and strengthen your online
            safety.
          </p>
        </div>

        <div className="space-y-4 text-right">
          <div className="flex items-center justify-end gap-2 text-text-secondary">
            <CalendarDays size={18} />
            <span>{today}</span>
          </div>

          <div className="flex items-center justify-end gap-2 text-text-secondary">
            <Clock3 size={18} />
            <span>Last Login : {lastLogin || "Today"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardHeader;
