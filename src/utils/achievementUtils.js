export function getAchievements({
  completedLessons,
  completedQuizzes,
  analyses,
}) {
  const achievements = [];

  if (analyses >= 1) {
    achievements.push({
      id: 1,
      title: "First Analysis",
      icon: "🛡️",
    });
  }

  if (completedLessons >= 1) {
    achievements.push({
      id: 2,
      title: "First Course",
      icon: "📚",
    });
  }

  if (completedQuizzes >= 1) {
    achievements.push({
      id: 3,
      title: "Quiz Master",
      icon: "🎯",
    });
  }

  if (completedLessons >= 6) {
    achievements.push({
      id: 4,
      title: "Learning Champion",
      icon: "🏆",
    });
  }

  return achievements;
}
