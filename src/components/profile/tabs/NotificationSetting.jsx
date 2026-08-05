import { useEffect, useState } from "react";
import { Bell } from "lucide-react";

import {
  getNotificationSettings,
  updateNotificationSetting,
} from "../../../utils/profile/notificationStorge";

function NotificationSettings() {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    const savedSettings = getNotificationSettings();

    setSettings(savedSettings);
  }, []);

  const notifications = [
    {
      key: "emailNotifications",
      title: "Email Notifications",
      description: "Receive important updates by email.",
    },

    {
      key: "threatAlerts",
      title: "Threat Alerts",
      description: "Get notified when suspicious activity is detected.",
    },

    {
      key: "learningReminder",
      title: "Learning Reminder",
      description: "Receive reminders to continue your learning.",
    },

    {
      key: "weeklyReport",
      title: "Weekly Security Report",
      description: "Receive your weekly SafeNet progress report.",
    },
  ];

  const handleToggle = (key) => {
    const updatedValue = !settings[key];

    const updatedSettings = updateNotificationSetting(key, updatedValue);

    setSettings(updatedSettings);
  };

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h2
          className="
            text-xl
            font-semibold
            text-text-primary
          "
        >
          Notifications
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-text-secondary
          "
        >
          Manage how SafeNet communicates with you.
        </p>
      </div>

      {/* Settings */}

      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.key}
            className="
                flex
                items-center
                justify-between
                border
                border-border
                bg-background
                p-5
              "
          >
            {/* Info */}

            <div
              className="
                  flex
                  items-start
                  gap-3
                "
            >
              <Bell
                size={20}
                className="
                    mt-1
                    text-primary
                  "
              />

              <div>
                <h3
                  className="
                      font-medium
                      text-text-primary
                    "
                >
                  {item.title}
                </h3>

                <p
                  className="
                      mt-1
                      text-sm
                      text-text-secondary
                    "
                >
                  {item.description}
                </p>
              </div>
            </div>

            {/* Switch */}

            <button
              onClick={() => handleToggle(item.key)}
              className={`
                  relative
                  h-6
                  w-11
                  rounded-full
                  transition

                  ${settings[item.key] ? "bg-primary" : "bg-border"}
                `}
            >
              <span
                className={`
                    absolute
                    top-1
                    left-1
                    h-4
                    w-4
                    rounded-full
                    bg-white
                    transition

                    ${settings[item.key] ? "translate-x-5" : ""}
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
