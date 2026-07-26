import { ANALYSES_KEY } from "./storage";
import { LEARNING_KEY } from "./learningStorage";
import { QUIZ_KEY } from "./quizStorage";

export function clearAnalyses() {
  localStorage.removeItem(ANALYSES_KEY);
}

export function clearLearningProgress() {
  localStorage.removeItem(LEARNING_KEY);
}

export function clearQuizHistory() {
  localStorage.removeItem(QUIZ_KEY);
}

export function clearAllSafeNetData() {
  clearAnalyses();
  clearLearningProgress();
  clearQuizHistory();
}
