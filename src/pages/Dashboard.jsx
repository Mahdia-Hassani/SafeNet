import DashboardLayout from "../layouts/DashboardLayout";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import SafetyScore from "../components/dashboard/SafetyScore";
import SecurityOverview from "../components/dashboard/SecurityOverview";
import LearningProgress from "../components/dashboard/LearningProgress";
import SimulationProgress from "../components/dashboard/SimulationProgress";
import RecentAnalyses from "../components/dashboard/RecentAnalyess";
import LatestNotes from "../components/dashboard/LatestNotes";
import SecurityTip from "../components/dashboard/SecurityTip";
import Achievements from "../components/dashboard/Achievements";
import { useProfile } from "../context/ProfileContext";

import lessons from "../data/lesson";
import securityTips from "../data/securityTips";
import achievementsData from "../data/achievements";

import useAnalyses from "../hooks/useAnalyses";

import {
  getCompletedLessonsCount,
  getLearningProgress,
} from "../utils/learningStorage";

import { getLatestNote, getNotes } from "../utils/noteStorage";

import {
  getSimulationResults,
  getSimulationProgress,
} from "../utils/simulationStorage";

function Dashboard() {
  const analyses = useAnalyses();
  const { profile } = useProfile();

  const completedLessons = getCompletedLessonsCount();

  const learningProgress = getLearningProgress(lessons.length);

  const simulationResults = getSimulationResults();

  const simulationProgress = getSimulationProgress() || {
    completedScenarios: 0,
    totalScenarios: 0,
    progress: 0,
  };

  const latestSimulation = simulationResults.length
    ? simulationResults[0]
    : null;

  const notes = getNotes();

  const latestNote = getLatestNote();

  return (
    <DashboardLayout>
      <div
        className="
          w-full
          max-w-[1600px]
          mx-auto
          space-y-8
          overflow-x-hidden
        "
      >
        <DashboardHeader
          userName={profile?.fullName || "User"}
          lastLogin="Today"
        />

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-12
            gap-6
          "
        >
          <div className="xl:col-span-4">
            <SafetyScore
              score={learningProgress}
              completedLessons={completedLessons}
              completedSimulations={simulationResults.length}
              threatAnalyses={analyses.length}
            />
          </div>

          <div className="xl:col-span-8 min-w-0">
            <SecurityOverview
              lessons={completedLessons}
              simulations={simulationResults.length}
              analyses={analyses.length}
              achievements={
                achievementsData.filter((item) => item.unlocked).length
              }
            />
          </div>
        </div>

        <SecurityTip tip={securityTips[0]} />

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
          "
        >
          <LearningProgress
            completedLessons={completedLessons}
            totalLessons={lessons.length}
            percentage={learningProgress}
          />

          <SimulationProgress
            completed={simulationProgress.completedScenarios}
            totalScenarios={simulationProgress.totalScenarios}
            score={latestSimulation?.score || 0}
            percentage={simulationProgress.progress}
          />
        </div>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
            min-w-0
          "
        >
          <RecentAnalyses analyses={analyses} />

          <LatestNotes notes={notes} latestNote={latestNote} />
        </div>

        <Achievements achievements={achievementsData} />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
