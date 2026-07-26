import { useState } from "react";

import AssistantButton from "./AssistantButton";
import AssistantWindow from "./AssistantWindow";

import { chatWithAssistant } from "../../services/chatAssistant";

function Assistant() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  async function sendMessage(text) {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      message: text,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);

    setLoading(true);

    try {
      const aiMessages = updatedMessages.map((item) => ({
        role: item.sender === "user" ? "user" : "assistant",

        content: item.message,
      }));

      const response = await chatWithAssistant(aiMessages);

      const assistantMessage = {
        id: Date.now() + 1,
        sender: "assistant",
        message: response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          sender: "assistant",
          message: "Sorry, I couldn't process your request. Please try again.",
        },
      ]);

      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AssistantWindow
        open={open}
        messages={messages}
        loading={loading}
        sendMessage={sendMessage}
        onClose={() => setOpen(false)}
      />

      <AssistantButton open={open} onClick={() => setOpen((prev) => !prev)} />
    </>
  );
}

export default Assistant;
