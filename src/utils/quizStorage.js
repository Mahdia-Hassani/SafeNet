export const QUIZ_KEY = "safenet_quizzes";

export function saveQuizResult(result) {
  const quizzes = JSON.parse(localStorage.getItem(QUIZ_KEY)) || [];

  quizzes.push(result);

  localStorage.setItem(QUIZ_KEY, JSON.stringify(quizzes));
}

export function getCompletedQuizzesCount() {
  const quizzes = JSON.parse(localStorage.getItem(QUIZ_KEY)) || [];

  return quizzes.length;
}

export function getQuizResults() {
  return JSON.parse(localStorage.getItem(QUIZ_KEY)) || [];
}

export function clearQuizResults() {
  localStorage.removeItem(QUIZ_KEY);
}
