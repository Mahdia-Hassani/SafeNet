import lessons from "../../data/lesson";

import {
  getCompletedLessonsCount,
  getLearningProgress,
} from "../../utils/learningStorage";

import Card from "../ui/Card";

function LearningProgress() {
  const completed = getCompletedLessonsCount();

  const progress = getLearningProgress(lessons.length);

  return (
    <Card>
      <h2 className="text-lg font-semibold text-text-primary">
        Learning Progress
      </h2>

      <p className="mt-2 text-sm text-text-secondary">
        {completed} / {lessons.length} Courses Completed
      </p>

      <div
        className="
          mt-4
          h-2
          overflow-hidden
          rounded-md
          bg-surface
          border
          border-border
        "
      >
        <div
          className="
            h-full
            bg-primary
            transition-all
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-3 text-sm font-medium text-text-primary">
        {progress}% Complete
      </p>
    </Card>
  );
}

export default LearningProgress;
