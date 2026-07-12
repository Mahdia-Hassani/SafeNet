const quizzes = [
  {
    id: 1,
    question:
      "You receive an email saying your bank account will be suspended unless you click a link immediately. What should you do?",
    options: [
      "Click the link immediately",
      "Ignore all emails from the bank forever",
      "Verify the sender and contact the bank directly",
      "Reply with your password",
    ],
    correctAnswer: 2,
  },

  {
    id: 2,
    question: "Which password is the strongest?",
    options: ["12345678", "password123", "MyDog", "T9#kP2!xL7@q"],
    correctAnswer: 3,
  },

  {
    id: 3,
    question: "What is a common sign of a phishing website?",
    options: [
      "HTTPS connection",
      "Official company logo",
      "Misspelled domain name",
      "Contact page",
    ],
    correctAnswer: 2,
  },

  {
    id: 4,
    question:
      "Someone calls pretending to be IT support and asks for your login code. What should you do?",
    options: [
      "Give them the code",
      "Verify their identity through official channels",
      "Share only part of the code",
      "Send it by email later",
    ],
    correctAnswer: 1,
  },

  {
    id: 5,
    question: "What is the purpose of Two-Factor Authentication (2FA)?",
    options: [
      "Make passwords shorter",
      "Increase account security with a second verification step",
      "Replace passwords completely",
      "Speed up login",
    ],
    correctAnswer: 1,
  },
];

export default quizzes;
