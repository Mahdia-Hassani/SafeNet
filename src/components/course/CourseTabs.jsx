function CourseTabs({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: "curriculum",
      label: "Curriculum",
    },
    {
      id: "resources",
      label: "Resources",
    },
    {
      id: "notes",
      label: "Notes",
    },
  ];

  return (
    <div
      className="
        bg-card
        px-6
        border-b
        border-[var(--border)]
      "
    >
      <div
        className="
          flex
          gap-8
          overflow-x-auto
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative
              py-4
              text-sm
              font-medium
              whitespace-nowrap
              transition-colors

              ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }
            `}
          >
            {tab.label}

            {activeTab === tab.id && (
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-full
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

export default CourseTabs;
