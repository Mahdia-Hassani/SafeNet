import { ShieldCheck } from "lucide-react";

function CoachResponse({ advice }) {
  if (!advice) return null;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">{advice.title}</h2>

      <p className="mt-3 text-slate-600">{advice.summary}</p>

      <div className="mt-6 space-y-4">
        {advice.tips.map((tip, index) => (
          <div key={index} className="flex items-start gap-3">
            <ShieldCheck size={20} className="mt-1 text-green-600" />

            <p>{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoachResponse;
