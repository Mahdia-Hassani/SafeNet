function AnalyzerTabs({ activeTab, setActiveTab }) {
  const tabs = ["message", "url", "file"];

  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            rounded-xl px-4 py-2 capitalize transition

            ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default AnalyzerTabs;
