function AnswerOption({ option, index, selectedAnswer, onSelect }) {
  const selected = selectedAnswer === index;

  return (
    <button
      onClick={() => onSelect(index)}
      className={`
        flex
        w-full
        items-center
        gap-4
        border
        p-5
        text-left
        transition

        ${
          selected
            ? "border-primary bg-primary/5"
            : "border-border bg-card hover:bg-surface"
        }
      `}
    >
      {/* Number */}

      <div
        className={`
          flex
          h-9
          w-9
          items-center
          justify-center
          border
          text-sm
          font-semibold

          ${
            selected
              ? "border-primary bg-primary text-white"
              : "border-border text-text-secondary"
          }
        `}
      >
        {index + 1}
      </div>

      {/* Text */}

      <span
        className="
          text-text-primary
        "
      >
        {option}
      </span>
    </button>
  );
}

export default AnswerOption;
