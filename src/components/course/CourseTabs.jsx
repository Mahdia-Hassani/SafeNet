function CourseTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "curriculum", label: "Curriculum" },
    { id: "resources", label: "Course Resources" },
    { id: "quiz", label: "Quizzes" },
  ];

  return (
    <div className="rounded-3xl bg-white p-2 shadow-sm">
      <div className="grid grid-cols-3 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              rounded-2xl px-4 py-3 text-sm font-medium transition
              ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CourseTabs;
