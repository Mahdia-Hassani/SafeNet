import { MessageSquare, Link2, FileText } from "lucide-react";

function AnalyzerTabs({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: "message",
      label: "Message",
      icon: MessageSquare,
    },
    {
      id: "url",
      label: "URL",
      icon: Link2,
    },
    {
      id: "file",
      label: "File",
      icon: FileText,
    },
  ];

  return (
    <div className="flex justify-center gap-16 border-b border-slate-200">
      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative flex items-center gap-2 py-4
              transition-all duration-200
              ${
                activeTab === tab.id
                  ? "text-blue-600"
                  : "text-slate-500 hover:text-slate-700"
              }
            `}
          >
            <Icon size={20} />

            <span className="font-medium">{tab.label}</span>

            {activeTab === tab.id && (
              <span
                className="
                  absolute
                  bottom-[-1px]
                  left-0
                  h-[2px]
                  w-full
                  bg-blue-600
                "
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

export default AnalyzerTabs;
