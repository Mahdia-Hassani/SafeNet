import { ShieldCheck, User } from "lucide-react";

function ChatMessage({ sender, message }) {
  const isUser = sender === "user";

  return (
    <div
      className={`
        mb-4
        flex
        ${isUser ? "justify-end" : "justify-start"}
      `}
    >
      <div
        className={`
          max-w-[85%]
          whitespace-pre-wrap
          rounded-2xl
          px-4
          py-3
          text-sm
          leading-6
          shadow-sm

          ${isUser ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"}
        `}
      >
        {message}
      </div>
    </div>
  );
}

export default ChatMessage;
