import useAnalyses from "../../hooks/useAnalyses";

import { getCompletedLessonsCount } from "../../utils/learningStorage";

import { getCompletedQuizzesCount } from "../../utils/quizStorage";

import { getAchievements } from "../../utils/achievement";

import Card from "../ui/Card";

function Achievements() {
  const analyses = useAnalyses();

  const achievements = getAchievements({
    analysesCount: analyses.length,
    lessonsCount: getCompletedLessonsCount(),
    quizzesCount: getCompletedQuizzesCount(),
  });

  return (
    <Card>
      <h2 className="text-lg font-semibold text-text-primary">Achievements</h2>

      {achievements.length === 0 ? (
        <p className="mt-3 text-text-secondary">
          No achievements unlocked yet.
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="
                    rounded-md
                    border
                    border-border
                    p-3
                  "
            >
              <p className="font-medium text-text-primary">
                🏆 {achievement.title}
              </p>

              <p className="mt-1 text-sm text-text-secondary">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

export default Achievements;
