import lessons from "../../data/lesson";

import {
  getCompletedLessonsCount,
  getLearningProgress,
} from "../../utils/learningStorage";

function LearningProgress() {
  const completed = getCompletedLessonsCount();

  const progress = getLearningProgress(lessons.length);

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
      <h2 className="text-lg font-semibold">Learning Progress</h2>

      <p className="mt-2 text-sm text-slate-500">
        {completed} / {lessons.length} Courses Completed
      </p>

      <div
        className="
          mt-4
          h-3
          overflow-hidden
          rounded-full
          bg-slate-100
        "
      >
        <div
          className="
            h-full
            rounded-full
            bg-blue-600
            transition-all
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-3 text-sm font-medium">{progress}% Complete</p>
    </div>
  );
}

export default LearningProgress;
