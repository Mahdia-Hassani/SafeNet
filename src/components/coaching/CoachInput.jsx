function CoachInput({ question, setQuestion, onAsk, loading }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <textarea
        rows={5}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask any cybersecurity question..."
        className="
          w-full
          rounded-xl
          border
          p-4
          outline-none
          focus:border-blue-500
        "
      />

      <button
        onClick={onAsk}
        disabled={loading}
        className="
          mt-5
          rounded-xl
          bg-blue-600
          px-6
          py-3
          text-white
          hover:bg-blue-700
        "
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>
    </div>
  );
}

export default CoachInput;
