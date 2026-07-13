import useAnalyses from "../../hooks/useAnalyses";

import { getCompletedLessonsCount } from "../../utils/learningStorage";

import { getCompletedQuizzesCount } from "../../utils/quizStorage";

import { getAchievements } from "../../utils/achievement";

function Achievements() {
  const analyses = useAnalyses();

  const achievements = getAchievements({
    analysesCount: analyses.length,
    lessonsCount: getCompletedLessonsCount(),
    quizzesCount: getCompletedQuizzesCount(),
  });

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
      "
    >
      <h2 className="text-lg font-semibold">Achievements</h2>

      {achievements.length === 0 ? (
        <p className="mt-3 text-slate-500">No achievements unlocked yet.</p>
      ) : (
        <div className="mt-4 space-y-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="
                rounded-xl
                border
                border-slate-200
                p-3
              "
            >
              <p className="font-medium">🏆 {achievement.title}</p>

              <p className="mt-1 text-sm text-slate-500">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Achievements;
