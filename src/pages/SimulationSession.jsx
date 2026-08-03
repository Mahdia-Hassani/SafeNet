import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import SimulationHeader from "../components/simulation/SimulationHeader";
import SimulationProgress from "../components/simulation/SimulationProgress";
import ScenarioCard from "../components/simulation/ScenarioCard";
import AnswerOption from "../components/simulation/AnswerOptions";

import quizzes from "../data/quizzes";

function SimulationSession() {
  const navigate = useNavigate();

  const [started, setStarted] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [answers, setAnswers] = useState([]);

  const question = quizzes[currentQuestion];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("simulation_progress"));

    if (saved) {
      setCurrentQuestion(saved.currentQuestion || 0);
      setAnswers(saved.answers || []);
    }
  }, []);

  function startSimulation() {
    setStarted(true);

    localStorage.setItem("simulation_started", true);
  }

  function handleNext() {
    if (selectedAnswer === null) return;

    const updatedAnswers = [
      ...answers,
      {
        questionId: question.id,
        answer: selectedAnswer,
      },
    ];

    localStorage.setItem(
      "simulation_progress",
      JSON.stringify({
        currentQuestion: currentQuestion + 1,

        answers: updatedAnswers,
      }),
    );

    if (currentQuestion === quizzes.length - 1) {
      localStorage.setItem("simulation_result", JSON.stringify(updatedAnswers));

      navigate("/simulation-report");

      return;
    }

    setAnswers(updatedAnswers);

    setCurrentQuestion((prev) => prev + 1);

    setSelectedAnswer(null);
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl space-y-8">
        <SimulationHeader />

        {!started ? (
          <div
            className="
border
border-border
bg-card
p-8
shadow-sm
"
          >
            <h2
              className="
text-xl
font-semibold
text-text-primary
"
            >
              Cybersecurity Threat Simulation
            </h2>

            <p
              className="
mt-3
text-text-secondary
"
            >
              Test your ability to identify online threats through realistic
              scenarios.
            </p>

            <button
              onClick={startSimulation}
              className="
mt-6
bg-primary
px-6
py-3
text-white
transition
hover:opacity-90
"
            >
              Start Simulation
            </button>
          </div>
        ) : (
          <>
            <SimulationProgress
              current={currentQuestion + 1}
              total={quizzes.length}
            />

            <ScenarioCard question={question} />

            <div
              className="
space-y-3
"
            >
              {question.options.map((option, index) => (
                <AnswerOption
                  key={index}
                  option={option}
                  selected={selectedAnswer === index}
                  onSelect={() => setSelectedAnswer(index)}
                />
              ))}
            </div>

            <div
              className="
flex
justify-between
pt-6
"
            >
              <button
                onClick={() => navigate("/threat-simulation")}
                className="
border
border-border
px-5
py-3
text-text-primary
"
              >
                Back
              </button>

              <button
                onClick={handleNext}
                className="
bg-primary
px-6
py-3
text-white
"
              >
                {currentQuestion === quizzes.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

export default SimulationSession;
