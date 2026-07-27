import { useNavigate } from "react-router-dom";
import { HelpCircle, ArrowRight } from "lucide-react";

function Quiz({ lesson }) {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Quizzes</h2>
        <p className="mt-2 text-slate-500">
          Test your understanding of this lesson.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
            <HelpCircle size={20} />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900">
              Lesson Quiz
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              This quiz helps you check your knowledge after completing{" "}
              {lesson.title}.
            </p>

            <button
              onClick={() => navigate("/simulation")}
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-5
                py-3
                text-white
                transition
                hover:bg-blue-700
              "
            >
              Start Quiz
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
