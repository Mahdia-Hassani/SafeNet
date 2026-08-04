import { Bell } from "lucide-react";

function NotificationSettings() {
  const notifications = [
    {
      title: "Email Notifications",
      description: "Receive important updates by email.",
      enabled: true,
    },
    {
      title: "Threat Alerts",
      description: "Get notified when suspicious activity is detected.",
      enabled: true,
    },
    {
      title: "Learning Reminder",
      description: "Receive reminders to continue your learning.",
      enabled: false,
    },
    {
      title: "Weekly Security Report",
      description: "Receive your weekly SafeNet progress report.",
      enabled: true,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h2 className="text-xl font-semibold text-text-primary">
          Notifications
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          Manage how SafeNet communicates with you.
        </p>
      </div>

      {/* Settings */}

      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.title}
            className="
              flex
              items-center
              justify-between
              rounded-none
              border
              border-border
              bg-background
              p-5
            "
          >
            <div className="flex items-start gap-3">
              <Bell size={20} className="mt-1 text-primary" />

              <div>
                <h3 className="font-medium text-text-primary">{item.title}</h3>

                <p className="mt-1 text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Temporary Switch */}

            <button
              className={`
                h-6
                w-11
                rounded-full
                transition

                ${item.enabled ? "bg-primary" : "bg-border"}
              `}
            >
              <div
                className={`
                  m-1
                  h-4
                  w-4
                  rounded-full
                  bg-white
                  transition

                  ${item.enabled ? "translate-x-5" : ""}
                `}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationSettings;
