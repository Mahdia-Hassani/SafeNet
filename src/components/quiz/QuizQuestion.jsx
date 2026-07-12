function QuizQuestion({ question, selectedAnswer, onSelectAnswer }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-semibold">{question.question}</h2>

      <div className="mt-6 space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`
              w-full
              rounded-xl
              border
              p-4
              text-left
              transition-all
              ${
                selectedAnswer === index
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-200 hover:border-slate-300"
              }
            `}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizQuestion;
