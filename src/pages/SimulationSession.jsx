import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import quizzes from "../data/quizzes";

import SimulationHeader from "../components/simulation/SimulationHeader";
import SimulationProgress from "../components/simulation/SimulationProgress";
import ScenarioCard from "../components/simulation/ScenarioCard";
import AnswerOptions from "../components/simulation/AnswerOptions";

function SimulationSession() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const current = quizzes[currentQuestion];

  function saveProgress(questionIndex, answerList) {
    localStorage.setItem(
      "simulation_progress",
      JSON.stringify({
        currentQuestion: questionIndex,
        completedScenarios: questionIndex,
        totalScenarios: quizzes.length,
        progress: Math.round((questionIndex / quizzes.length) * 100),
      }),
    );

    localStorage.setItem("simulation_answers", JSON.stringify(answerList));
  }

  function handleSelect(index) {
    const updated = [...answers];

    updated[currentQuestion] = index;

    setAnswers(updated);

    saveProgress(currentQuestion, updated);
  }

  function handlePrevious() {
    if (currentQuestion === 0) return;

    setCurrentQuestion((prev) => prev - 1);
  }

  function handleNext() {
    if (answers[currentQuestion] === undefined) return;

    const next = currentQuestion + 1;

    saveProgress(next, answers);

    setCurrentQuestion(next);
  }

  function handleSubmit() {
    let score = 0;

    quizzes.forEach((quiz, index) => {
      if (answers[index] === quiz.correctAnswer) {
        score++;
      }
    });

    localStorage.setItem("simulation_score", JSON.stringify(score));

    localStorage.setItem(
      "simulation_results",
      JSON.stringify({
        score,
        total: quizzes.length,
        completedAt: new Date().toISOString(),
      }),
    );

    localStorage.removeItem("simulation_progress");

    navigate("/simulation/report");
  }

  return (
    <DashboardLayout>
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          space-y-8
        "
      >
        <SimulationHeader />

        <SimulationProgress
          current={currentQuestion + 1}
          total={quizzes.length}
        />

        {/* Scenario */}

        <ScenarioCard scenario={current} />

        {/* Answers */}

        <AnswerOptions
          options={current.options}
          selected={answers[currentQuestion]}
          onSelect={handleSelect}
        />

        {/* Navigation */}

        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-border
            pt-6
          "
        >
          <button
            onClick={() => {
              if (currentQuestion === 0) {
                navigate("/simulation");
              } else {
                handlePrevious();
              }
            }}
            className="
              border
              border-border
              px-6
              py-3
              font-medium
              transition
              hover:bg-muted
            "
          >
            {currentQuestion === 0 ? "Back" : "Previous"}
          </button>

          {currentQuestion === quizzes.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="
                bg-primary
                px-7
                py-3
                font-medium
                text-white
                transition
                hover:opacity-90
              "
            >
              Submit Simulation
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={answers[currentQuestion] === undefined}
              className="
                bg-primary
                px-7
                py-3
                font-medium
                text-white
                transition
                disabled:cursor-not-allowed
                disabled:opacity-40
                hover:opacity-90
              "
            >
              Next Question
            </button>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SimulationSession;
