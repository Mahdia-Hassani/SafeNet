import SettingCard from "./SettingCard";

import { Trash2, BookOpen, ShieldAlert, Target } from "lucide-react";

import {
  clearAnalyses,
  clearLearningProgress,
  clearQuizHistory,
} from "../../utils/settingsStorages";

function PrivacySettings() {
  function handleClearAnalyses() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all analyses?",
    );

    if (!confirmDelete) return;

    clearAnalyses();

    alert("Analyses deleted successfully.");
  }

  function handleClearLearning() {
    const confirmDelete = window.confirm(
      "Are you sure you want to reset learning progress?",
    );

    if (!confirmDelete) return;

    clearLearningProgress();

    alert("Learning progress reset.");
  }

  function handleClearQuiz() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete quiz history?",
    );

    if (!confirmDelete) return;

    clearQuizHistory();

    alert("Quiz history deleted.");
  }

  return (
    <SettingCard
      title="Privacy & Data"
      description="Manage your stored SafeNet data."
    >
      <div className="space-y-4">
        <ActionCard
          icon={<ShieldAlert size={20} />}
          title="Clear Scam Analyses"
          description="Remove all saved threat analysis history."
          onClick={handleClearAnalyses}
        />

        <ActionCard
          icon={<BookOpen size={20} />}
          title="Reset Learning Progress"
          description="Delete completed lessons and progress."
          onClick={handleClearLearning}
        />

        <ActionCard
          icon={<Target size={20} />}
          title="Clear Quiz History"
          description="Remove all completed quiz records."
          onClick={handleClearQuiz}
        />
      </div>
    </SettingCard>
  );
}

function ActionCard({ icon, title, description, onClick }) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        bg-slate-50
        p-4
        transition
        hover:bg-slate-100
      "
    >
      <div className="flex items-center gap-4">
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
          <h3 className="font-medium text-slate-800">{title}</h3>

          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>

      <button
        onClick={onClick}
        className="
          rounded-xl
          p-2
          text-red-500
          transition
          hover:bg-red-50
        "
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

export default PrivacySettings;
