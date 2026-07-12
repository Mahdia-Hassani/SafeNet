export const ANALYSES_KEY = "safenet_analyses";

export function getAnalyses() {
  const data = localStorage.getItem(ANALYSES_KEY);

  return data ? JSON.parse(data) : [];
}

export function saveAnalysis(analysis) {
  const analyses = getAnalyses();

  analyses.unshift(analysis);

  localStorage.setItem(ANALYSES_KEY, JSON.stringify(analyses));
}

export function deleteAnalysis(id) {
  const analyses = getAnalyses();

  const updatedAnalyses = analyses.filter((analysis) => analysis.id !== id);

  localStorage.setItem(ANALYSES_KEY, JSON.stringify(updatedAnalyses));
}
