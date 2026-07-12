export function calculateSafetyScore(analyses) {
  let score = 100;

  analyses.forEach((analysis) => {
    if (analysis.riskLevel === "High Risk") {
      score -= 10;
    }

    if (analysis.riskLevel === "Medium Risk") {
      score -= 5;
    }
  });

  return Math.max(score, 0);
}
