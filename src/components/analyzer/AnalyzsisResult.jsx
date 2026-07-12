import Card from "../ui/Card";

function AnalysisResult({ analysis }) {
  return (
    <Card>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Analysis Result</h2>
        </div>

        <div>
          <p className="text-sm text-slate-500">Risk Level</p>

          <span className="mt-2 inline-block rounded-full bg-red-100 px-4 py-2 text-red-600">
            {analysis.riskLevel}
          </span>
        </div>

        <div>
          <h3 className="font-semibold">Warning Indicators</h3>

          <ul className="mt-3 space-y-2">
            {analysis.indicators.map((indicator, index) => (
              <li key={index}>• {indicator}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Threat Explanation</h3>

          <p className="mt-2 text-slate-600">{analysis.explanation}</p>
        </div>

        <div>
          <h3 className="font-semibold">Recommendation</h3>

          <p className="mt-2 text-slate-600">{analysis.recommendation}</p>
        </div>
      </div>
    </Card>
  );
}

export default AnalysisResult;
