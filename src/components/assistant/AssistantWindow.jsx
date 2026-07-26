import { useRef, useEffect } from "react";

import { X } from "lucide-react";

import MessageInput from "./MessageInput";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

function AssistantWindow({ open, onClose, messages, loading, sendMessage }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div
      className={`
        fixed
        bottom-24
        right-6
        z-50

        flex
        flex-col

        w-[calc(100vw-32px)]
        max-w-[390px]

        h-[75vh]
        max-h-[680px]

        overflow-hidden
        rounded-3xl
        bg-white

        shadow-[0_20px_60px_rgba(0,0,0,.18)]

        transition-all
        duration-300
        ease-out

        ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "pointer-events-none translate-y-6 scale-95 opacity-0"
        }
      `}
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          bg-blue-600
          px-5
          py-4
          text-white
        "
      >
        <div>
          <h2 className="font-semibold">SafeNet Assistant</h2>

          <p className="text-xs text-blue-100">AI Cybersecurity Coach</p>
        </div>

        <button onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-5">
        {messages.length === 0 ? (
          <>
            {/* Welcome */}

            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="font-semibold">Hello Ali 👋</p>

              <p className="mt-2 text-sm text-slate-600">
                I'm SafeNet Assistant. Ask me anything about cybersecurity,
                phishing, malware, passwords or online safety.
              </p>
            </div>

            {/* Suggestions */}

            <div className="mt-6 space-y-2">
              <button
                onClick={() => sendMessage("Is this email a phishing scam?")}
                className="w-full rounded-xl bg-slate-100 p-3 text-left transition hover:bg-slate-200"
              >
                Is this email a phishing scam?
              </button>

              <button
                onClick={() =>
                  sendMessage("How can I create a strong password?")
                }
                className="w-full rounded-xl bg-slate-100 p-3 text-left transition hover:bg-slate-200"
              >
                How can I create a strong password?
              </button>

              <button
                onClick={() =>
                  sendMessage(
                    "What should I do after clicking a suspicious link?",
                  )
                }
                className="w-full rounded-xl bg-slate-100 p-3 text-left transition hover:bg-slate-200"
              >
                What should I do after clicking a suspicious link?
              </button>
            </div>
          </>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                sender={message.sender}
                message={message.message}
              />
            ))}

            {loading && <TypingIndicator />}

            <div ref={bottomRef} />
          </>
        )}
      </div>

      <MessageInput onSend={sendMessage} />
    </div>
  );
}

export default AssistantWindow;
