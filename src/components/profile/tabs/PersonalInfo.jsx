import { Globe, Languages, Clock3, Briefcase } from "lucide-react";

function PersonalInfo() {
  const personalInfo = [
    {
      icon: <Globe size={18} />,
      label: "Country",
      value: "Afghanistan",
    },
    {
      icon: <Languages size={18} />,
      label: "Language",
      value: "English / Persian",
    },
    {
      icon: <Clock3 size={18} />,
      label: "Timezone",
      value: "GMT +4:30",
    },
    {
      icon: <Briefcase size={18} />,
      label: "Occupation",
      value: "Student",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h2 className="text-xl font-semibold text-text-primary">
          Personal Information
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          Manage your personal information and regional preferences.
        </p>
      </div>

      {/* Information */}

      <div className="grid gap-4 md:grid-cols-2">
        {personalInfo.map((item) => (
          <div
            key={item.label}
            className="
              rounded-none
              border
              border-border
              bg-background
              p-5
              transition
              hover:border-primary
            "
          >
            <div className="flex items-center gap-3">
              <div className="text-primary">{item.icon}</div>

              <div>
                <p className="text-sm text-text-secondary">{item.label}</p>

                <h3 className="mt-1 font-medium text-text-primary">
                  {item.value}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bio */}

      <div
        className="
          rounded-none
          border
          border-border
          bg-background
          p-5
        "
      >
        <h3 className="font-medium text-text-primary">About Me</h3>

        <p className="mt-3 leading-7 text-text-secondary">
          Passionate about web development and cybersecurity. Currently building
          SafeNet to improve cybersecurity awareness through interactive
          learning and threat simulations.
        </p>
      </div>
    </div>
  );
}

export default PersonalInfo;
