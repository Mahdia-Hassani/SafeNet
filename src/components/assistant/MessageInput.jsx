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
    <div className="border-t border-slate-200 bg-white p-4">
      <div className="flex items-end gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about cybersecurity..."
          className="
            flex-1
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            px-4
            py-3
            outline-none
            transition-all
            duration-200
            focus:border-blue-500
            focus:bg-white
            focus:ring-2
            focus:ring-blue-100
          "
        />

        {message.trim() && (
          <button
            onClick={handleSend}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-blue-600
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:scale-105
              hover:bg-blue-700
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
