import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Info,
  Calendar,
  CheckCircle2,
} from "lucide-react";

function AnalysisResult({ analysis }) {
  const risk = analysis.riskLevel?.toLowerCase();

  const riskStyle =
    risk === "high"
      ? {
          bg: "bg-red-50",
          border: "border-red-200",
          text: "text-red-600",
          icon: <ShieldAlert size={36} />,
        }
      : risk === "medium"
        ? {
            bg: "bg-amber-50",
            border: "border-amber-200",
            text: "text-amber-600",
            icon: <AlertTriangle size={36} />,
          }
        : {
            bg: "bg-green-50",
            border: "border-green-200",
            text: "text-green-600",
            icon: <ShieldCheck size={36} />,
          };

  return (
    <div className="space-y-6">
      {/* Risk Header */}

      <section
        className={`
border
${riskStyle.border}
${riskStyle.bg}
p-6
`}
      >
        <div className="flex items-center gap-5">
          <div className={riskStyle.text}>{riskStyle.icon}</div>

          <div>
            <p className="text-sm text-text-secondary">
              AI Security Assessment
            </p>

            <h1
              className="
text-2xl
font-bold
text-text-primary
"
            >
              {analysis.riskLevel} Risk Detected
            </h1>

            <p
              className="
mt-1
text-sm
text-text-secondary
"
            >
              {analysis.indicators?.length || 0}
              security indicators found
            </p>
          </div>
        </div>
      </section>

      <div
        className="
grid
gap-6
lg:grid-cols-3
"
      >
        {/* Main Report */}

        <div
          className="
space-y-6
lg:col-span-2
"
        >
          <ReportCard title="Detected Content">
            <div
              className="
bg-surface
border
border-border
p-4
text-sm
leading-6
text-text-secondary
"
            >
              {analysis.content}
            </div>
          </ReportCard>

          <ReportCard title="Threat Indicators">
            <div className="space-y-2">
              {analysis.indicators?.map((item, index) => (
                <div
                  key={index}
                  className="
flex
items-center
gap-3
border
border-border
px-4
py-3
text-sm
"
                >
                  <AlertTriangle size={17} className="text-amber-500" />

                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </ReportCard>

          <ReportCard title="Threat Explanation">
            <p
              className="
text-sm
leading-7
text-text-secondary
"
            >
              {analysis.explanation}
            </p>
          </ReportCard>
        </div>

        {/* Sidebar */}

        <div
          className="
space-y-6
"
        >
          <div
            className="
border
border-border
bg-card
p-5
"
          >
            <h3
              className="
font-semibold
text-text-primary
"
            >
              Recommendation
            </h3>

            <div
              className="
mt-4
flex
gap-3
bg-green-50
border
border-green-200
p-4
"
            >
              <CheckCircle2 size={20} className="text-green-600" />

              <p
                className="
text-sm
leading-6
text-text-secondary
"
              >
                {analysis.recommendation}
              </p>
            </div>
          </div>

          <div
            className="
border
border-border
bg-card
p-5
"
          >
            <h3
              className="
font-semibold
text-text-primary
"
            >
              Report Info
            </h3>

            <div
              className="
mt-4
space-y-3
text-sm
text-text-secondary
"
            >
              <div className="flex gap-2">
                <Info size={16} />
                ID: {analysis.id}
              </div>

              <div className="flex gap-2">
                <Calendar size={16} />
                {new Date(analysis.analyzedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportCard({ title, children }) {
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
border-b
border-border
px-5
py-4
"
      >
        <h3
          className="
font-semibold
text-text-primary
"
        >
          {title}
        </h3>
      </div>

      <div className="p-5">{children}</div>
    </section>
  );
}

export default AnalysisResult;
