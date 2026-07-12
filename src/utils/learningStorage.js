const COMPLETED_LESSONS_KEY = "safenet_completed_lessons";

export function getCompletedLessons() {
  const data = localStorage.getItem(COMPLETED_LESSONS_KEY);

  return data ? JSON.parse(data) : [];
}

export function completeLesson(id) {
  const completed = getCompletedLessons();

  if (!completed.includes(id)) {
    completed.push(id);

    localStorage.setItem(COMPLETED_LESSONS_KEY, JSON.stringify(completed));
  }
}
