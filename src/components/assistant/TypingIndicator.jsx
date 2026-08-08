import { ShieldCheck } from "lucide-react";

function TypingIndicator() {
  return (
    <div className="mb-5 flex items-end gap-3">
      {/* Assistant Avatar */}

      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center

          rounded-full

          bg-primary
          text-white
        "
      >
        <ShieldCheck size={18} />
      </div>

      {/* Typing Card */}

      <div
        className="
          border
          border-border
          rounded-lg

          bg-card

          px-5
          py-4

          shadow-sm
        "
      >
        <div className="flex items-center gap-2">
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-primary
              animate-bounce
            "
          />

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-primary
              animate-bounce
              [animation-delay:150ms]
            "
          />

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-primary
              animate-bounce
              [animation-delay:300ms]
            "
          />
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;
