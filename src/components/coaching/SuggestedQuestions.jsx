const questions = [
  "How can I avoid phishing scams?",

  "How do I create a strong password?",

  "What is Two-Factor Authentication?",

  "How can I protect my online accounts?",

  "What should I do if I clicked a suspicious link?",
];

function SuggestedQuestions({ onSelect }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Suggested Questions</h3>

      <div className="space-y-3">
        {questions.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="
              block
              w-full
              rounded-xl
              bg-slate-100
              p-3
              text-left
              transition
              hover:bg-blue-50
            "
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SuggestedQuestions;
