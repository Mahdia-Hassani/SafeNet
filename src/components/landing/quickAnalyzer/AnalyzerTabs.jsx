function AnalyzerTabs({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: "message",
      label: "Message",
    },

    {
      id: "url",
      label: "URL",
    },

    {
      id: "file",
      label: "File",
    },
  ];

  return (
    <div
      className="
      mt-10

      border-b

      border-border

      flex

      justify-center
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            px-8
            py-4

            text-sm

            font-medium

            transition

            border-b-2

            ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-text-secondary hover:text-text-primary"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default AnalyzerTabs;
