import { useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import ResultSummary from "../components/simulation/ResultSummary";
import ScoreCard from "../components/simulation/ScoreCard";

import quizzes from "../data/quizzes";

import { useEffect, useState } from "react";

function SimulationReport() {
  const navigate = useNavigate();

  const [result, setResult] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("simulation_result"));

    if (data) {
      setResult(data);
    }
  }, []);

  const correctAnswers = result.filter(
    (item) =>
      item.answer ===
      quizzes.find((q) => q.id === item.questionId)?.correctAnswer,
  ).length;

  const score = Math.round((correctAnswers / quizzes.length) * 100);

  return (
    <DashboardLayout>
      <div
        className="
mx-auto
max-w-5xl
space-y-8
"
      >
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
            Performance summary of your cybersecurity simulation.
          </p>
        </div>

        <ScoreCard
          score={score}
          correct={correctAnswers}
          total={quizzes.length}
        />

        <ResultSummary score={score} />

        <button
          onClick={() => navigate("/simulation-session")}
          className="
bg-primary
px-6
py-3
text-white
"
        >
          Back To Simulation
        </button>
      </div>
    </DashboardLayout>
  );
}

export default SimulationReport;
