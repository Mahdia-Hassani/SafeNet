import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  XCircle,
  ShieldCheck,
  RotateCcw,
  ArrowRight,
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";

import quizzes from "../data/quizzes";

import { useEffect, useState } from "react";

function SimulationReport() {
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const savedScore =
      JSON.parse(localStorage.getItem("simulation_score")) || 0;

    const savedAnswers =
      JSON.parse(localStorage.getItem("simulation_answers")) || [];

    setScore(savedScore);
    setAnswers(savedAnswers);
  }, []);

  const correctAnswers = score;

  const wrongAnswers = quizzes.length - correctAnswers;

  const percentage = Math.round((correctAnswers / quizzes.length) * 100);

  const securityLevel =
    percentage >= 80
      ? "Strong Security Awareness"
      : percentage >= 50
        ? "Needs Improvement"
        : "High Risk";

  return (
    <DashboardLayout>
      <div
        className="
        mx-auto
        max-w-6xl
        space-y-8
        "
      >
        {/* Header */}

        <div>
          <h1
            className="
            text-3xl
            font-bold
            text-text-primary
            "
          >
            Simulation Report
          </h1>

          <p
            className="
            mt-2
            text-text-secondary
            "
          >
            Your cybersecurity decision performance analysis.
          </p>
        </div>

        {/* Score */}

        <section
          className="
          border
          border-border
          bg-card
          "
        >
          <div
            className="
            flex
            items-center
            justify-between
            border-b
            border-border
            px-6
            py-5
            "
          >
            <div>
              <h2
                className="
                text-lg
                font-semibold
                "
              >
                Security Awareness Score
              </h2>

              <p
                className="
                text-sm
                text-text-secondary
                "
              >
                Based on your simulation decisions
              </p>
            </div>

            <ShieldCheck className="text-primary" size={32} />
          </div>

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            p-6
            "
          >
            <div>
              <p className="text-sm text-text-secondary">Score</p>

              <h3
                className="
                mt-2
                text-4xl
                font-bold
                "
              >
                {percentage}%
              </h3>
            </div>

            <div>
              <p className="text-sm text-text-secondary">Correct Answers</p>

              <h3
                className="
                mt-2
                text-3xl
                font-bold
                text-green-600
                "
              >
                {correctAnswers}
              </h3>
            </div>

            <div>
              <p className="text-sm text-text-secondary">Risk Level</p>

              <h3
                className="
                mt-2
                text-xl
                font-semibold
                "
              >
                {securityLevel}
              </h3>
            </div>
          </div>
        </section>

        {/* Overview */}

        <section
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          "
        >
          <div
            className="
            border
            border-border
            bg-card
            p-6
            "
          >
            <h3
              className="
              font-semibold
              "
            >
              Performance Summary
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex justify-between">
                <span>Total Questions</span>

                <b>{quizzes.length}</b>
              </div>

              <div className="flex justify-between">
                <span>Correct</span>

                <b className="text-green-600">{correctAnswers}</b>
              </div>

              <div className="flex justify-between">
                <span>Incorrect</span>

                <b className="text-red-600">{wrongAnswers}</b>
              </div>
            </div>
          </div>

          <div
            className="
            border
            border-border
            bg-card
            p-6
            "
          >
            <h3 className="font-semibold">Recommendation</h3>

            <p
              className="
              mt-4
              leading-7
              text-text-secondary
              "
            >
              {percentage >= 80
                ? "Excellent work. Continue practicing advanced cybersecurity scenarios."
                : "Improve your threat recognition skills by reviewing phishing, password security and social engineering topics."}
            </p>
          </div>
        </section>

        {/* Review */}

        <section
          className="
          border
          border-border
          bg-card
          "
        >
          <div
            className="
            border-b
            border-border
            px-6
            py-5
            "
          >
            <h2 className="font-semibold">Scenario Review</h2>
          </div>

          <div>
            {quizzes.map((quiz, index) => {
              const correct = answers[index] === quiz.correctAnswer;

              return (
                <div
                  key={quiz.id}
                  className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-border
                  px-6
                  py-4
                  "
                >
                  <div>
                    <p className="font-medium">{quiz.category}</p>

                    <p className="text-sm text-text-secondary">
                      Question {index + 1}
                    </p>
                  </div>

                  {correct ? (
                    <CheckCircle className="text-green-600" />
                  ) : (
                    <XCircle className="text-red-600" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Actions */}

        <div
          className="
          flex
          justify-between
          "
        >
          <button
            onClick={() => navigate("/simulation")}
            className="
            flex
            items-center
            gap-2
            border
            border-border
            px-6
            py-3
            "
          >
            <RotateCcw size={18} />
            Restart
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="
            flex
            items-center
            gap-2
            bg-primary
            px-6
            py-3
            text-white
            "
          >
            Dashboard
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SimulationReport;
