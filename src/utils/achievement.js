export function getAchievements({ analysesCount, lessonsCount, quizzesCount }) {
  const achievements = [];

  if (analysesCount >= 1) {
    achievements.push({
      id: 1,
      title: "First Analysis",
      description: "Completed your first threat analysis.",
    });
  }

  if (lessonsCount >= 1) {
    achievements.push({
      id: 2,
      title: "First Lesson",
      description: "Completed your first course.",
    });
  }

  if (quizzesCount >= 1) {
    achievements.push({
      id: 3,
      title: "Quiz Starter",
      description: "Finished your first quiz.",
    });
  }

  if (lessonsCount >= 3) {
    achievements.push({
      id: 4,
      title: "Cyber Explorer",
      description: "Completed 3 learning courses.",
    });
  }

  if (analysesCount >= 5) {
    achievements.push({
      id: 5,
      title: "Threat Hunter",
      description: "Completed 5 scam analyses.",
    });
  }

  return achievements;
}
