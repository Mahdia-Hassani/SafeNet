import { useState } from "react";
import { Send } from "lucide-react";

function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");

  function handleSend() {
    const text = message.trim();

    if (!text) return;

    onSend(text);

    setMessage("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div
      className="
        border-t
        border-border

        bg-card

        p-5
      "
    >
      <div className="flex items-end gap-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about cybersecurity..."
          className="
            flex-1

            border
            border-border
            rounded-lg
            bg-surface
            
            px-5
            py-3

            text-sm
            text-text-primary

            outline-none

            transition

            placeholder:text-text-secondary

            focus:border-primary
            focus:bg-card
          "
        />

        {message.trim() && (
          <button
            onClick={handleSend}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              bg-primary

              text-white
              rounded-lg

              transition

              hover:opacity-90

              active:scale-95
            "
          >
            <Send size={18} />
          </button>
        )}
      </div>
    </div>
  );
}

export default MessageInput;
