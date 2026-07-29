import { MessageSquare, Link2, FileText } from "lucide-react";

function AnalyzerTabs({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: "message",
      label: "Message",
      icon: MessageSquare,
      description: "Emails & Messages",
    },
    {
      id: "url",
      label: "URL",
      icon: Link2,
      description: "Websites & Links",
    },
    {
      id: "file",
      label: "File",
      icon: FileText,
      description: "Documents",
    },
  ];

  return (
    <section
      className="
        border
        border-border
        bg-card
        shadow-sm
      "
    >
      <div
        className="
          grid
          gap-4
          p-5

          md:grid-cols-3
        "
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;

          const active = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex
                items-center
                gap-4

                border
                px-5
                py-5

                text-left
                transition

                ${
                  active
                    ? "border-primary bg-primary text-white shadow-sm"
                    : "border-border bg-surface text-text-primary hover:border-primary hover:bg-card"
                }
              `}
            >
              <div
                className={`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  ${
                    active
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 text-primary"
                  }
                `}
              >
                <Icon size={20} />
              </div>

              <div>
                <h3 className="font-semibold">{tab.label}</h3>

                <p
                  className={`
                    mt-1
                    text-sm

                    ${active ? "text-white/80" : "text-text-secondary"}
                  `}
                >
                  {tab.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default AnalyzerTabs;
