const PROGRESS_KEY = "safenet_simulation_progress";
const RESULTS_KEY = "safenet_simulation_results";

/* =======================================
   Progress
======================================= */

export function getSimulationProgress() {
  const data = localStorage.getItem(PROGRESS_KEY);

  return data ? JSON.parse(data) : null;
}

export function saveSimulationProgress(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function clearSimulationProgress() {
  localStorage.removeItem(PROGRESS_KEY);
}

/* =======================================
   Results
======================================= */

export function getSimulationResults() {
  const data = localStorage.getItem(RESULTS_KEY);

  return data ? JSON.parse(data) : [];
}

export function saveSimulationResult(result) {
  const results = getSimulationResults();

  const newResult = {
    id: crypto.randomUUID(),

    completedAt: Date.now(),

    percentage: Math.round((result.score / result.total) * 100),

    ...result,
  };

  results.unshift(newResult);

  localStorage.setItem(RESULTS_KEY, JSON.stringify(results));

  return newResult;
}

export function deleteSimulationResult(id) {
  const results = getSimulationResults().filter((item) => item.id !== id);

  localStorage.setItem(RESULTS_KEY, JSON.stringify(results));
}

export function clearSimulationResults() {
  localStorage.removeItem(RESULTS_KEY);
}

/* =======================================
   Dashboard Helpers
======================================= */

export function getLatestSimulationResult() {
  const results = getSimulationResults();

  if (!results.length) return null;

  return results[0];
}

export function getCompletedSimulationsCount() {
  return getSimulationResults().length;
}

export function getAverageSimulationScore() {
  const results = getSimulationResults();

  if (!results.length) return 0;

  const total = results.reduce((sum, item) => sum + item.percentage, 0);

  return Math.round(total / results.length);
}

export function getBestSimulationScore() {
  const results = getSimulationResults();

  if (!results.length) return 0;

  return Math.max(...results.map((item) => item.percentage));
}

/* =======================================
   Reset
======================================= */

export function resetSimulationData() {
  clearSimulationProgress();

  clearSimulationResults();
}
