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

        rounded-lg
        bg-card

        shadow-sm

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

          border-b
          border-border

          bg-card

          px-5
          py-4
        "
      >
        <div>
          <h2
            className="
              font-semibold
              text-text-primary
            "
          >
            SafeNet Assistant
          </h2>

          <p
            className="
              mt-1
              text-xs
              text-text-secondary
            "
          >
            AI Cybersecurity Coach
          </p>
        </div>

        <button
          onClick={onClose}
          className="
            rounded-lm
            p-2
            text-text-secondary
            transition
            hover:bg-surface
            hover:text-text-primary
          "
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}

      <div
        className="
          flex-1
          overflow-y-auto
          bg-surface
          p-5
        "
      >
        {messages.length === 0 ? (
          <>
            {/* Welcome */}

            <div
              className="
                border
                border-border
                bg-card
                p-5
                rounded-lg
              "
            >
              <h3
                className="
                  font-semibold
                  text-text-primary
                "
              >
                Welcome 👋
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-text-secondary
                "
              >
                I'm SafeNet Assistant. Ask me anything about cybersecurity,
                phishing, malware, passwords or online safety.
              </p>
            </div>

            {/* Suggestions */}

            <div className="mt-6 space-y-3">
              <button
                onClick={() => sendMessage("Is this email a phishing scam?")}
                className="
                  w-full

                  border
                  border-border

                  bg-card
                  rounded-lg
                  p-4

                  text-left
                  text-sm
                  text-text-primary

                  transition

                  hover:border-primary/30
                  hover:bg-primary
                "
              >
                Is this email a phishing scam?
              </button>

              <button
                onClick={() =>
                  sendMessage("How can I create a strong password?")
                }
                className="
                  w-full

                  border
                  border-border
                  rounded-lg
                  bg-card
                  p-4
                  text-left
                  text-sm
                  text-text-primary
                  transition
                  hover:border-primary/30
                  hover:bg-primary
                "
              >
                How can I create a strong password?
              </button>

              <button
                onClick={() =>
                  sendMessage(
                    "What should I do after clicking a suspicious link?",
                  )
                }
                className="
                  w-full

                  border
                  border-border
                  rounded-lg

                  bg-card

                  p-4

                  text-left
                  text-sm
                  text-text-primary

                  transition

                  hover:border-primary/30
                  hover:bg-primary
                "
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
