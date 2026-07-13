import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import quizzes from "../data/quizzes";
import { saveQuizResult } from "../utils/quizStorage";
import QuizQuestion from "../components/quiz/QuizQuestion";

function ThreatSimulation() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [score, setScore] = useState(0);

  const [quizFinished, setQuizFinished] = useState(false);

  const question = quizzes[currentQuestion];

  function handleNext() {
    if (selectedAnswer === null) {
      alert("Please select an answer.");
      return;
    }

    const isCorrect = selectedAnswer === question.correctAnswer;

    const newScore = isCorrect ? score + 1 : score;

    if (currentQuestion === quizzes.length - 1) {
      saveQuizResult({
        id: Date.now(),
        score: newScore,
        total: quizzes.length,
        completedAt: new Date().toISOString(),
      });

      setScore(newScore);

      setQuizFinished(true);

      return;
    }

    if (isCorrect) {
      setScore(newScore);
    }

    setCurrentQuestion((prev) => prev + 1);

    setSelectedAnswer(null);
  }

  if (quizFinished) {
    const percentage = Math.round((score / quizzes.length) * 100);

    return (
      <DashboardLayout>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold">Quiz Completed 🎉</h1>

          <p className="mt-6 text-xl">
            Score: {score} / {quizzes.length}
          </p>

          <p className="mt-2 text-slate-500">{percentage}% Correct Answers</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-3xl">
        {/* Header */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold">Threat Simulation</h1>

          <p className="mt-2 text-slate-500">
            Test your cybersecurity awareness.
          </p>
        </div>

        {/* Progress */}

        <p className="mb-4 text-sm text-slate-500">
          Question {currentQuestion + 1} of {quizzes.length}
        </p>

        {/* Question */}

        <QuizQuestion
          question={question}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={setSelectedAnswer}
        />

        {/* Button */}

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleNext}
            className="
              rounded-xl
              bg-blue-600
              px-6
              py-3
              text-white
              transition
              hover:bg-blue-700
            "
          >
            {currentQuestion === quizzes.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ThreatSimulation;
