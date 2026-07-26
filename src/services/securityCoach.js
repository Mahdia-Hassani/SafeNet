const API_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function getSecurityAdvice(question) {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

  if (!apiKey) {
    throw new Error("OpenRouter API key is missing");
  }

  const response = await fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": window.location.origin,
      "X-Title": "SafeNet Cybersecurity Platform",
    },

    body: JSON.stringify({
      model: "openai/gpt-4o-mini",

      messages: [
        {
          role: "system",

          content: `
                    You are an expert cybersecurity coach.

                    Answer beginner cybersecurity questions.

                    Keep answers friendly and practical.

                    Return ONLY JSON.

                    {
                    "title":"",
                    "summary":"",
                    "tips":[]
                    }
                    `,
        },

        {
          role: "user",

          content: question,
        },
      ],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "AI request failed");
  }

  return JSON.parse(data.choices[0].message.content);
}
