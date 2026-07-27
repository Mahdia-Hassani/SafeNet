const lessons = [
  {
    id: 1,

    title: "Phishing Awareness",

    description:
      "Learn how cybercriminals use phishing emails, fake websites and social engineering to steal sensitive information.",

    level: "Beginner",

    duration: "45 min",

    category: "Email Security",

    image: "/images/phishing.jpg",

    video: "https://www.youtube.com/embed/XBkzBrXlle0",

    content:
      "This course teaches you how phishing attacks work, how to recognize suspicious emails, fake login pages and dangerous links.",

    learningObjectives: [
      "Understand phishing attacks",
      "Identify fake emails",
      "Recognize suspicious links",
      "Verify sender identity",
      "Report phishing safely",
    ],

    curriculum: [
      {
        title: "Introduction to Phishing",
        duration: "5 min",
        completed: false,
      },
      {
        title: "Common Phishing Techniques",
        duration: "10 min",
        completed: false,
      },
      {
        title: "Recognizing Fake Emails",
        duration: "12 min",
        completed: false,
      },
      {
        title: "Real-world Examples",
        duration: "8 min",
        completed: false,
      },
      {
        title: "Final Quiz",
        duration: "10 min",
        completed: false,
      },
    ],

    resources: [
      {
        title: "Google Safe Browsing",
        type: "Article",
        url: "https://safebrowsing.google.com/",
      },

      {
        title: "FTC Phishing Guide",
        type: "Article",
        url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams",
      },

      {
        title: "Phishing Prevention Checklist",
        type: "PDF",
        url: "/resources/phishing-guide.pdf",
      },
    ],

    certificate: true,
  },

  {
    id: 2,

    title: "Password Security",

    description:
      "Learn how to build strong passwords and protect your online accounts.",

    level: "Beginner",

    duration: "40 min",

    category: "Account Safety",

    image: "/images/password.jpg",

    video: "https://www.youtube.com/embed/3NjQ9b3pgIg",

    content:
      "Learn password best practices, password managers and multi-factor authentication.",

    learningObjectives: [
      "Create strong passwords",
      "Use password managers",
      "Enable MFA",
      "Protect accounts",
    ],

    curriculum: [
      {
        title: "Password Basics",
        duration: "6 min",
        completed: false,
      },
      {
        title: "Strong Password Rules",
        duration: "8 min",
        completed: false,
      },
      {
        title: "Password Managers",
        duration: "12 min",
        completed: false,
      },
      {
        title: "Multi-Factor Authentication",
        duration: "14 min",
        completed: false,
      },
    ],

    resources: [
      {
        title: "Google Password Manager",
        type: "Article",
        url: "https://passwords.google.com/",
      },

      {
        title: "NIST Password Guidelines",
        type: "Article",
        url: "https://www.nist.gov/",
      },

      {
        title: "Password Security Handbook",
        type: "PDF",
        url: "/resources/password-guide.pdf",
      },
    ],

    certificate: true,
  },

  {
    id: 3,

    title: "Safe Browsing",

    description:
      "Learn how to identify malicious websites, unsafe downloads and dangerous browser behavior.",

    level: "Intermediate",

    duration: "55 min",

    category: "Web Safety",

    image: "/images/safe-browsing.jpg",

    video: "https://www.youtube.com/embed/yLJqD2Bk6vs",

    content:
      "Learn how to safely browse the internet, identify fake websites, understand HTTPS, avoid malicious downloads and stay protected online.",

    learningObjectives: [
      "Recognize fake websites",
      "Understand HTTPS",
      "Avoid malicious downloads",
      "Check website legitimacy",
      "Browse safely",
    ],

    curriculum: [
      {
        title: "How Websites Work",
        duration: "8 min",
        completed: false,
      },
      {
        title: "HTTPS vs HTTP",
        duration: "10 min",
        completed: false,
      },
      {
        title: "Recognizing Fake Websites",
        duration: "14 min",
        completed: false,
      },
      {
        title: "Safe Downloads",
        duration: "13 min",
        completed: false,
      },
      {
        title: "Final Quiz",
        duration: "10 min",
        completed: false,
      },
    ],

    resources: [
      {
        title: "Google Safe Browsing",
        type: "Article",
        url: "https://safebrowsing.google.com/",
      },

      {
        title: "OWASP Top 10",
        type: "Article",
        url: "https://owasp.org/www-project-top-ten/",
      },

      {
        title: "Safe Browsing Guide",
        type: "PDF",
        url: "/resources/safe-browsing.pdf",
      },
    ],

    quiz: [
      {
        question: "Which protocol indicates an encrypted website connection?",

        options: ["HTTP", "HTTPS", "FTP", "SMTP"],

        answer: "HTTPS",
      },
    ],

    certificate: true,
  },

  {
    id: 4,

    title: "Social Engineering",

    description:
      "Understand how attackers manipulate people into revealing confidential information.",

    level: "Advanced",

    duration: "60 min",

    category: "Human Risk",

    image: "/images/social-engineering.jpg",

    video: "https://www.youtube.com/embed/Vo1urF6S4x8",

    content:
      "Learn how cybercriminals exploit human psychology through phishing, impersonation, baiting and pretexting.",

    learningObjectives: [
      "Understand social engineering",
      "Recognize manipulation",
      "Protect personal information",
      "Verify identities",
      "Respond safely",
    ],

    curriculum: [
      {
        title: "Introduction",
        duration: "8 min",
        completed: false,
      },
      {
        title: "Psychology Behind Attacks",
        duration: "12 min",
        completed: false,
      },
      {
        title: "Common Techniques",
        duration: "18 min",
        completed: false,
      },
      {
        title: "Real World Cases",
        duration: "12 min",
        completed: false,
      },
      {
        title: "Final Quiz",
        duration: "10 min",
        completed: false,
      },
    ],

    resources: [
      {
        title: "Social Engineering Framework",
        type: "Article",
        url: "https://www.social-engineer.org/",
      },

      {
        title: "CISA Social Engineering",
        type: "Article",
        url: "https://www.cisa.gov/",
      },

      {
        title: "Human Hacking Guide",
        type: "PDF",
        url: "/resources/social-engineering.pdf",
      },
    ],

    quiz: [
      {
        question: "Which attack relies mainly on manipulating people?",

        options: ["Malware", "Social Engineering", "Firewall", "Encryption"],

        answer: "Social Engineering",
      },
    ],

    certificate: true,
  },
  {
    id: 5,

    title: "Malware Protection",

    description:
      "Understand viruses, ransomware, spyware and how to protect your devices.",

    level: "Intermediate",

    duration: "65 min",

    category: "Device Security",

    image: "/images/malware.jpg",

    video: "https://www.youtube.com/embed/NMYbkzjI5EY",

    content:
      "Learn different malware types, infection methods and practical prevention strategies.",

    learningObjectives: [
      "Identify malware",
      "Understand ransomware",
      "Use antivirus software",
      "Update devices",
      "Protect personal files",
    ],

    curriculum: [
      {
        title: "Malware Overview",
        duration: "10 min",
        completed: false,
      },
      {
        title: "Virus vs Worm",
        duration: "10 min",
        completed: false,
      },
      {
        title: "Ransomware",
        duration: "15 min",
        completed: false,
      },
      {
        title: "Device Protection",
        duration: "20 min",
        completed: false,
      },
      {
        title: "Quiz",
        duration: "10 min",
        completed: false,
      },
    ],

    resources: [
      {
        title: "Microsoft Security",
        type: "Article",
        url: "https://www.microsoft.com/security",
      },

      {
        title: "Malwarebytes Learning Center",
        type: "Article",
        url: "https://www.malwarebytes.com/",
      },

      {
        title: "Malware Protection Guide",
        type: "PDF",
        url: "/resources/malware-guide.pdf",
      },
    ],
    quiz: [
      {
        question: "What is ransomware designed to do?",

        options: [
          "Speed up computers",
          "Encrypt files for payment",
          "Improve browsing",
          "Block ads",
        ],

        answer: "Encrypt files for payment",
      },
    ],

    certificate: true,
  },
  {
    id: 6,

    title: "Online Privacy",

    description:
      "Protect your digital identity and personal information while using the internet.",

    level: "Beginner",

    duration: "45 min",

    category: "Privacy",

    image: "/images/privacy.jpg",

    video: "https://www.youtube.com/embed/wVyu7NB7W6Y",

    content:
      "Learn how websites collect data, how tracking works and how to improve your online privacy.",

    learningObjectives: [
      "Protect personal information",
      "Understand tracking",
      "Manage browser privacy",
      "Use VPNs safely",
      "Control permissions",
    ],

    curriculum: [
      {
        title: "Digital Footprint",
        duration: "8 min",
        completed: false,
      },
      {
        title: "Cookies & Tracking",
        duration: "10 min",
        completed: false,
      },
      {
        title: "Privacy Settings",
        duration: "12 min",
        completed: false,
      },
      {
        title: "Protecting Personal Data",
        duration: "15 min",
        completed: false,
      },
    ],

    resources: [
      {
        title: "Mozilla Privacy Guide",
        type: "Article",
        url: "https://foundation.mozilla.org/",
      },

      {
        title: "Electronic Frontier Foundation",
        type: "Article",
        url: "https://www.eff.org/",
      },

      {
        title: "Online Privacy Handbook",
        type: "PDF",
        url: "/resources/privacy-guide.pdf",
      },
    ],

    quiz: [
      {
        question: "Which tool helps encrypt internet traffic?",

        options: ["VPN", "PDF", "ZIP", "USB"],

        answer: "VPN",
      },
    ],

    certificate: true,
  },
];

export default lessons;
