const API_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function analyzeThreat(content) {
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
You are a cybersecurity awareness assistant.

Analyze the provided message, URL, or content.

You MUST return ONLY valid JSON.
Do not add markdown.
Do not add explanations outside JSON.

Use this exact format:

{
  "riskLevel": "Low | Medium | High",

  "indicators": [
    "indicator 1",
    "indicator 2"
  ],

  "explanation": "Explain why this content may be dangerous.",

  "recommendation": "Give practical security advice."
}

If the content is safe, still return JSON and use:
riskLevel: Low
`,
        },

        {
          role: "user",

          content,
        },
      ],

      temperature: 0.2,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("OpenRouter Error:", data);

    throw new Error(data.error?.message || "AI analysis failed");
  }

  const aiText = data.choices[0].message.content;

  try {
    const jsonResult = JSON.parse(aiText);

    return jsonResult;
  } catch (error) {
    console.error("Invalid AI JSON:", aiText);

    throw new Error("AI returned invalid format");
  }
}
