import {
  ShieldCheck,
  Lock,
  Smartphone,
  Monitor,
  ChevronRight,
} from "lucide-react";

function SecuritySettings() {
  const securityItems = [
    {
      icon: <Lock size={20} />,
      title: "Password",
      description: "Change your account password and keep it secure.",
      status: "Updated 30 days ago",
    },
    {
      icon: <Smartphone size={20} />,
      title: "Two-Factor Authentication",
      description: "Add an extra layer of protection to your account.",
      status: "Not Enabled",
    },
    {
      icon: <Monitor size={20} />,
      title: "Trusted Devices",
      description: "Manage devices that are currently signed in.",
      status: "2 Devices",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h2 className="text-xl font-semibold text-text-primary">
          Security Settings
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          Manage your account security and authentication settings.
        </p>
      </div>

      {/* Security Score */}

      <div
        className="
          rounded-none
          border
          border-border
          bg-background
          p-6
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-primary" />

              <h3 className="font-semibold text-text-primary">
                Security Score
              </h3>
            </div>

            <p className="mt-2 text-sm text-text-secondary">
              Your account protection is currently good.
            </p>
          </div>

          <div className="text-right">
            <h2 className="text-3xl font-bold text-primary">82%</h2>

            <p className="text-sm text-text-secondary">Good</p>
          </div>
        </div>

        {/* Progress */}

        <div className="mt-6 h-2 rounded-full bg-border">
          <div
            className="
              h-2
              w-[82%]
              rounded-full
              bg-primary
            "
          />
        </div>
      </div>

      {/* Settings */}

      <div className="space-y-4">
        {securityItems.map((item) => (
          <button
            key={item.title}
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-none
              border
              border-border
              bg-background
              p-5
              text-left
              transition
              hover:border-primary
            "
          >
            <div className="flex items-start gap-4">
              <div className="text-primary">{item.icon}</div>

              <div>
                <h3 className="font-medium text-text-primary">{item.title}</h3>

                <p className="mt-1 text-sm text-text-secondary">
                  {item.description}
                </p>

                <span className="mt-3 inline-block text-xs text-primary">
                  {item.status}
                </span>
              </div>
            </div>

            <ChevronRight size={20} className="text-text-secondary" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SecuritySettings;
