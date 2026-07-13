const QUIZZES_KEY = "safenet_quizzes";

export function getCompletedQuizzes() {
  const data = localStorage.getItem(QUIZZES_KEY);

  return data ? JSON.parse(data) : [];
}

export function saveQuizResult(result) {
  const quizzes = getCompletedQuizzes();

  quizzes.unshift(result);

  localStorage.setItem(QUIZZES_KEY, JSON.stringify(quizzes));
}

export function getCompletedQuizzesCount() {
  return getCompletedQuizzes().length;
}
