import { Bot } from "lucide-react";

function AssistantButton({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-6
        right-6
        z-50

        flex
        h-14
        w-14
        items-center
        justify-center

        rounded-full

        bg-primary
        text-white

        border
        border-primary/20

        shadow-sm

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-md

        active:scale-95
      "
    >
      <Bot
        size={26}
        className={`
          transition-transform
          duration-300
          ${open ? "rotate-180" : "rotate-0"}
        `}
      />
    </button>
  );
}

export default AssistantButton;
