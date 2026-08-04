import { motion } from "framer-motion";

function ProfileTabs({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: "profile",
      label: "Profile",
    },
    {
      id: "personal",
      label: "Personal",
    },
    {
      id: "security",
      label: "Security",
    },
    {
      id: "appearance",
      label: "Appearance",
    },
    {
      id: "notifications",
      label: "Notifications",
    },
  ];

  return (
    <div
      className="
        w-full
        border-b
        border-border
      "
    >
      <div
        className="
          flex
          gap-6
          overflow-x-auto
          scrollbar-hide
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
                relative
                pb-3
                text-sm
                font-medium
                whitespace-nowrap
                transition
                duration-200

                ${
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }

              `}
          >
            {tab.label}

            {activeTab === tab.id && (
              <motion.div
                layoutId="active-profile-tab"
                className="
                      absolute
                      left-0
                      right-0
                      -bottom-[1px]
                      h-[2px]
                      bg-primary
                    "
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProfileTabs;
