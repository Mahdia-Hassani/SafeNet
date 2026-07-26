export const LEARNING_KEY = "safenet_learning";


export function completeLesson(id) {

  const completed =
    JSON.parse(
      localStorage.getItem(LEARNING_KEY)
    ) || [];


  if (!completed.includes(id)) {
    completed.push(id);
  }


  localStorage.setItem(
    LEARNING_KEY,
    JSON.stringify(completed)
  );

}



export function getCompletedLessonsCount() {

  const completed =
    JSON.parse(
      localStorage.getItem(LEARNING_KEY)
    ) || [];


  return completed.length;

}



export function getLearningProgress(totalLessons) {

  const completed =
    getCompletedLessonsCount();


  if(totalLessons === 0) return 0;


  return Math.round(
    (completed / totalLessons) * 100
  );

}