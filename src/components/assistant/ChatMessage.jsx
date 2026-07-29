import { ShieldCheck, User } from "lucide-react";

function ChatMessage({ sender, message }) {
  const isUser = sender === "user";

  return (
    <div
      className={`
        mb-5
        flex
        items-end
        gap-3

        ${isUser ? "justify-end" : "justify-start"}
      `}
    >
      {!isUser && (
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center

            rounded-xl

            bg-primary
            text-white
          "
        >
          <ShieldCheck size={18} />
        </div>
      )}

      <div
        className={`
          max-w-[80%]

          border

          px-5
          py-4

          text-sm
          leading-7

          transition

          ${
            isUser
              ? `
                border-primary
                bg-primary
                text-white
              `
              : `
                border-border
                bg-card
                text-text-primary
              `
          }
        `}
      >
        <p className="whitespace-pre-wrap break-words">{message}</p>
      </div>

      {isUser && (
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center

            rounded-xl

            border
            border-border

            bg-card
          "
        >
          <User size={18} className="text-text-primary" />
        </div>
      )}
    </div>
  );
}

export default ChatMessage;
