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
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-blue-600
        text-white
        shadow-[0_20px_60px_rgba(0,0,0,.18)]
        transition-all
        duration-300
        hover:scale-110
        active:scale-95
      "
    >
      <Bot
        size={28}
        className={`transition-transform duration-300 ${
          open ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>
  );
}

export default AssistantButton;
