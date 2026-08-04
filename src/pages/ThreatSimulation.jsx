import { useNavigate } from "react-router-dom";
import { Clock, ShieldAlert, Play } from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";

import SimulationHeader from "../components/simulation/SimulationHeader";
import SimulationProgress from "../components/simulation/SimulationProgress";
import ScoreCard from "../components/simulation/ScoreCard";

function ThreatSimulation() {
  const navigate = useNavigate();

  const progress = JSON.parse(localStorage.getItem("simulation_progress")) || {
    currentQuestion: 0,
  };

  const score = JSON.parse(localStorage.getItem("simulation_score")) || 0;

  const totalQuestions = 5;

  const currentQuestion = progress.currentQuestion || 0;

  const percentage = Math.round((currentQuestion / totalQuestions) * 100);

  return (
    <DashboardLayout>
      <div
        className="
          w-full
          max-w-6xl
          space-y-8
        "
      >
        <SimulationHeader />

        <div
          className="
            grid
            gap-6
            lg:grid-cols-2
          "
        >
          <SimulationProgress
            current={currentQuestion}
            total={totalQuestions}
            percentage={percentage}
          />

          <ScoreCard score={score} correct={score} total={totalQuestions} />
        </div>

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
              py-6
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  bg-primary/10
                  text-primary
                "
              >
                <ShieldAlert size={24} />
              </div>

              <div>
                <h2
                  className="
                    text-xl
                    font-semibold
                    text-text-primary
                  "
                >
                  Threat Simulation
                </h2>

                <p
                  className="
                    mt-1
                    text-sm
                    text-text-secondary
                  "
                >
                  Test your cybersecurity awareness with realistic attack
                  scenarios.
                </p>
              </div>
            </div>
          </div>

          <div
            className="
              flex
              flex-col
              gap-6
              px-6
              py-6
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <Clock className="text-primary" size={24} />

              <div>
                <p
                  className="
                    font-medium
                    text-text-primary
                  "
                >
                  Estimated Time
                </p>

                <p
                  className="
                    text-sm
                    text-text-secondary
                  "
                >
                  Around 10-15 minutes
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/simulation/session")}
              className="
                flex
                items-center
                justify-center
                gap-2
                bg-primary
                px-6
                py-3
                font-medium
                text-white
                transition
                hover:opacity-90
              "
            >
              <Play size={18} />
              Start Simulation
            </button>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default ThreatSimulation;
