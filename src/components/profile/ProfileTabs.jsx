import { motion } from "framer-motion";

function ProfileTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "personal", label: "Personal" },
    { id: "security", label: "Security" },
    { id: "appearance", label: "Appearance" },
    { id: "notifications", label: "Notifications" },
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
          items-center
          gap-8

          px-5
          sm:px-7

          overflow-x-auto
          lg:overflow-visible

          scrollbar-hide
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative
              flex-shrink-0
              pb-4

              text-sm
              font-medium
              whitespace-nowrap

              transition-colors
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
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0

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
