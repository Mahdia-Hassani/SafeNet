import { Info, Code2, ShieldCheck, User } from "lucide-react";

import SettingCard from "./SettingCard";

function AboutSettings() {
  return (
    <SettingCard
      title="About SafeNet"
      description="Information about the platform."
    >
      <div className="space-y-4">
        <InfoItem
          icon={<ShieldCheck size={20} />}
          title="Version"
          value="1.0.0"
        />

        <InfoItem
          icon={<Code2 size={20} />}
          title="Technology"
          value="React • Tailwind CSS • OpenRouter AI"
        />

        <InfoItem icon={<User size={20} />} title="Developer" value="Ali" />
      </div>
    </SettingCard>
  );
}

function InfoItem({ icon, title, value }) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        bg-slate-50
        p-4
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-white
          text-blue-600
          shadow-sm
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">{title}</p>

        <p className="font-medium text-slate-800">{value}</p>
      </div>
    </div>
  );
}

export default AboutSettings;
