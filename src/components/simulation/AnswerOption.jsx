import { CheckCircle2 } from "lucide-react";

function AnswerOption({ option, index, selectedAnswer, onSelect }) {
  const selected = selectedAnswer === index;

  const letters = ["A", "B", "C", "D", "E"];

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      className={`
        relative
        flex
        w-full
        items-start
        gap-5
        border
        px-6
        py-5
        text-left
        transition-all
        duration-200

        ${
          selected
            ? "border-primary bg-primary/5"
            : "border-border bg-card hover:border-primary/40 hover:bg-muted/40"
        }
      `}
    >
      {/* Left Indicator */}

      {selected && (
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-1
            bg-primary
          "
        />
      )}

      {/* Letter */}

      <div
        className={`
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          border
          font-semibold
          transition

          ${
            selected
              ? "border-primary bg-primary text-white"
              : "border-border bg-muted text-text-secondary"
          }
        `}
      >
        {letters[index]}
      </div>

      {/* Answer */}

      <div className="flex-1">
        <p
          className={`
            leading-7
            ${selected ? "font-medium text-text-primary" : "text-text-primary"}
          `}
        >
          {option}
        </p>
      </div>

      {/* Check */}

      {selected && <CheckCircle2 size={22} className="shrink-0 text-primary" />}
    </button>
  );
}

export default AnswerOption;
