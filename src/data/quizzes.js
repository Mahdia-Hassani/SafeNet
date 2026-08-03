const quizzes = [
  {
    id: 1,

    category: "Phishing",

    type: "email",

    difficulty: "Beginner",

    scenario: `
You receive an email claiming that your bank account will be suspended within the next 24 hours.

The email asks you to click a link immediately to verify your identity.

Sender:
support@secure-bank-login.com

The email creates a strong sense of urgency and requests immediate action.
`,

    question: "What should you do first?",

    options: [
      "Click the link immediately",
      "Ignore every email from your bank forever",
      "Verify the sender and contact the bank through its official website or phone number",
      "Reply with your password",
    ],

    correctAnswer: 2,

    explanation:
      "Legitimate banks never ask you to verify your password through email links. Always verify the sender and use official contact channels.",

    points: 20,
  },

  {
    id: 2,

    category: "Password Security",

    type: "account",

    difficulty: "Beginner",

    scenario: `
You are creating a new account for an online banking service.

Which password provides the strongest protection against attackers?
`,

    question: "Choose the strongest password.",

    options: ["12345678", "password123", "MyDog", "T9#kP2!xL7@q"],

    correctAnswer: 3,

    explanation:
      "Strong passwords should contain uppercase letters, lowercase letters, numbers, symbols and sufficient length.",

    points: 20,
  },

  {
    id: 3,

    category: "Safe Browsing",

    type: "url",

    difficulty: "Intermediate",

    scenario: `
You receive a message containing this website:

https://paypaI-security-login.com

The page looks almost identical to PayPal's official website.

You notice something unusual in the address.
`,

    question: "Which warning sign indicates this may be a phishing website?",

    options: [
      "HTTPS connection",
      "Official-looking logo",
      "Misspelled domain name",
      "Contact page",
    ],

    correctAnswer: 2,

    explanation:
      "Attackers often register domains that closely resemble legitimate websites using similar-looking characters.",

    points: 20,
  },

  {
    id: 4,

    category: "Social Engineering",

    type: "phone",

    difficulty: "Intermediate",

    scenario: `
Someone calls claiming to be from your company's IT department.

They say your account has been compromised and urgently ask you to provide the one-time verification code you just received.
`,

    question: "What is the safest response?",

    options: [
      "Provide the verification code",
      "Verify the person's identity through official company channels",
      "Share only part of the code",
      "Send the code later by email",
    ],

    correctAnswer: 1,

    explanation:
      "Verification codes should never be shared over the phone unless you initiated the request and confirmed the person's identity.",

    points: 20,
  },

  {
    id: 5,

    category: "Account Protection",

    type: "account",

    difficulty: "Beginner",

    scenario: `
Your online banking service recommends enabling Two-Factor Authentication (2FA).

You want to understand why this extra step is important.
`,

    question: "What is the main purpose of Two-Factor Authentication (2FA)?",

    options: [
      "Make passwords shorter",
      "Add an additional verification step to improve account security",
      "Replace passwords completely",
      "Make logging in faster",
    ],

    correctAnswer: 1,

    explanation:
      "2FA significantly improves security by requiring something you know (password) and something you have (verification code or authentication app).",

    points: 20,
  },
];

export default quizzes;
