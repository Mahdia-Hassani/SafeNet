import { useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import SimulationHeader from "../components/simulation/SimulationHeader";
import SimulationProgress from "../components/simulation/SimulationProgress";
import ScoreCard from "../components/simulation/ScoreCard";

function ThreatSimulation() {
  const navigate = useNavigate();

  const progress =
    JSON.parse(localStorage.getItem("simulation_progress")) || {};

  const currentQuestion = progress.currentQuestion || 0;

  const totalQuestions = 5;

  const completed = currentQuestion >= totalQuestions;

  const score = JSON.parse(localStorage.getItem("simulation_score")) || 0;

  return (
    <DashboardLayout>
      <div
        className="
          mx-auto
          max-w-6xl
          space-y-8
        "
      >
        <SimulationHeader />

        <SimulationProgress current={currentQuestion} total={totalQuestions} />

        <ScoreCard score={score} correct={score} total={totalQuestions} />

        <section
          className="
            border
            border-border
            bg-card
            shadow-sm
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
            <h2
              className="
                text-xl
                font-semibold
                text-text-primary
              "
            >
              Ready to Start?
            </h2>

            <p
              className="
                mt-2
                text-text-secondary
              "
            >
              Complete realistic cybersecurity scenarios and improve your
              decision-making skills.
            </p>
          </div>

          <div
            className="
              flex
              items-center
              justify-between
              px-6
              py-6
            "
          >
            <div>
              <p className="font-medium text-text-primary">Estimated Time</p>

              <p className="mt-1 text-sm text-text-secondary">
                Approximately 10–15 minutes
              </p>
            </div>

            <button
              onClick={() => navigate("/simulation-session")}
              className="
                bg-primary
                px-6
                py-3
                text-white
                transition
                hover:opacity-90
              "
            >
              {completed ? "Continue Simulation" : "Start Simulation"}
            </button>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default ThreatSimulation;
