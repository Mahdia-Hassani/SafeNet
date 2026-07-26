function TypingIndicator() {
  return (
    <div className="mb-4 flex justify-start">
      <div className="rounded-2xl bg-slate-100 px-4 py-3">
        <span className="animate-pulse text-slate-500">
          SafeNet Assistant is typing...
        </span>
      </div>
    </div>
  );
}

export default TypingIndicator;
