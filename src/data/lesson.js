const lessons = [
  {
    id: 1,

    title: "Phishing Awareness",

    description:
      "Learn how cybercriminals use phishing emails, fake websites and social engineering to steal sensitive information.",

    level: "Beginner",

    duration: "45 min",

    lessons: 5,

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
        id: 1,
        title: "Introduction to Phishing",
        duration: "5 min",
        completed: false,
      },

      {
        id: 2,
        title: "Common Phishing Techniques",
        duration: "10 min",
        completed: false,
      },

      {
        id: 3,
        title: "Recognizing Fake Emails",
        duration: "12 min",
        completed: false,
      },

      {
        id: 4,
        title: "Real-world Examples",
        duration: "8 min",
        completed: false,
      },

      {
        id: 5,
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

    quiz: [
      {
        question: "Which of these is a common phishing sign?",

        options: [
          "Urgent request for password",
          "Official company domain",
          "Valid HTTPS certificate",
          "Known sender",
        ],

        answer: "Urgent request for password",
      },
    ],

    certificate: true,
  },
  {
    id: 2,

    title: "Password Security",

    description:
      "Learn how to create strong passwords, use password managers and secure your online accounts against unauthorized access.",

    level: "Beginner",

    duration: "40 min",

    lessons: 5,

    category: "Account Safety",

    image: "/images/PasswordSecurity.jpg",

    video: "https://www.youtube.com/embed/3NjQ9b3pgIg",

    content:
      "Passwords remain one of the most important layers of online security. This course teaches you how to create strong passwords, avoid common mistakes, use password managers and enable multi-factor authentication.",

    learningObjectives: [
      "Create strong passwords",
      "Understand password attacks",
      "Use password managers",
      "Enable Multi-Factor Authentication",
      "Protect online accounts",
    ],

    curriculum: [
      {
        id: 1,
        title: "Why Passwords Matter",
        duration: "6 min",
        completed: false,
      },

      {
        id: 2,
        title: "Creating Strong Passwords",
        duration: "8 min",
        completed: false,
      },

      {
        id: 3,
        title: "Password Managers",
        duration: "10 min",
        completed: false,
      },

      {
        id: 4,
        title: "Multi-Factor Authentication (MFA)",
        duration: "9 min",
        completed: false,
      },

      {
        id: 5,
        title: "Course Quiz",
        duration: "7 min",
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
        title: "Password Security Checklist",
        type: "PDF",
        url: "/resources/password-guide.pdf",
      },
    ],

    quiz: [
      {
        question: "Which password is considered the strongest?",

        options: ["password123", "John1999", "Qw!7mP#2zL@9", "12345678"],

        answer: "Qw!7mP#2zL@9",
      },

      {
        question: "What is the main purpose of a password manager?",

        options: [
          "Increase internet speed",
          "Store and generate secure passwords",
          "Remove viruses",
          "Block advertisements",
        ],

        answer: "Store and generate secure passwords",
      },

      {
        question: "What does Multi-Factor Authentication (MFA) provide?",

        options: [
          "A second layer of security",
          "Faster login",
          "Password recovery",
          "Internet encryption",
        ],

        answer: "A second layer of security",
      },
    ],

    certificate: true,
  },
  {
    id: 3,

    title: "Safe Browsing",

    description:
      "Learn how to identify malicious websites, avoid dangerous downloads and browse the internet safely.",

    level: "Intermediate",

    duration: "55 min",

    lessons: 6,

    category: "Web Safety",

    image: "/images/SafeBrowsing.jpg",

    video: "https://www.youtube.com/embed/yLJqD2Bk6vs",

    content:
      "Every day millions of users visit unsafe websites without realizing the risks. This course teaches you how to identify fake websites, understand HTTPS, avoid malicious downloads and protect yourself while browsing.",

    learningObjectives: [
      "Identify fake websites",
      "Understand HTTPS",
      "Recognize unsafe downloads",
      "Verify website legitimacy",
      "Protect browser privacy",
      "Browse safely on public Wi-Fi",
    ],

    curriculum: [
      {
        id: 1,
        title: "Introduction to Safe Browsing",
        duration: "7 min",
        completed: false,
      },

      {
        id: 2,
        title: "Understanding HTTPS and Certificates",
        duration: "9 min",
        completed: false,
      },

      {
        id: 3,
        title: "Recognizing Fake Websites",
        duration: "12 min",
        completed: false,
      },

      {
        id: 4,
        title: "Safe Downloads",
        duration: "10 min",
        completed: false,
      },

      {
        id: 5,
        title: "Browsing on Public Wi-Fi",
        duration: "8 min",
        completed: false,
      },

      {
        id: 6,
        title: "Course Quiz",
        duration: "9 min",
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
        title: "Mozilla HTTPS Guide",
        type: "Article",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
      },

      {
        title: "Safe Browsing Checklist",
        type: "PDF",
        url: "/resources/safe-browsing.pdf",
      },
    ],

    quiz: [
      {
        question:
          "Which protocol indicates that communication with a website is encrypted?",

        options: ["HTTP", "HTTPS", "FTP", "SMTP"],

        answer: "HTTPS",
      },

      {
        question: "Which is a common sign of a fake website?",

        options: [
          "Misspelled domain name",
          "HTTPS enabled",
          "Official company logo",
          "Valid contact information",
        ],

        answer: "Misspelled domain name",
      },

      {
        question:
          "Before downloading a file from the internet, what should you do first?",

        options: [
          "Verify the source website",
          "Disable antivirus",
          "Ignore browser warnings",
          "Turn off Windows Defender",
        ],

        answer: "Verify the source website",
      },
    ],

    certificate: true,
  },
  {
    id: 4,

    title: "Social Engineering",

    description:
      "Understand how attackers manipulate human psychology to steal sensitive information without hacking systems directly.",

    level: "Advanced",

    duration: "60 min",

    lessons: 6,

    category: "Human Risk",

    image: "/images/SocialEngineering.jpg",

    video: "https://www.youtube.com/embed/Vo1urF6S4x8",

    content:
      "Social engineering attacks exploit human trust instead of technical vulnerabilities. Learn how attackers use impersonation, urgency, fear and deception to manipulate victims.",

    learningObjectives: [
      "Understand social engineering",
      "Recognize manipulation techniques",
      "Identify impersonation attacks",
      "Verify identities safely",
      "Protect confidential information",
      "Respond correctly to suspicious requests",
    ],

    curriculum: [
      {
        id: 1,
        title: "Introduction to Social Engineering",
        duration: "8 min",
        completed: false,
      },

      {
        id: 2,
        title: "Psychology Behind Attacks",
        duration: "10 min",
        completed: false,
      },

      {
        id: 3,
        title: "Common Social Engineering Techniques",
        duration: "14 min",
        completed: false,
      },

      {
        id: 4,
        title: "Real World Case Studies",
        duration: "12 min",
        completed: false,
      },

      {
        id: 5,
        title: "Defense Strategies",
        duration: "8 min",
        completed: false,
      },

      {
        id: 6,
        title: "Course Quiz",
        duration: "8 min",
        completed: false,
      },
    ],

    resources: [
      {
        title: "CISA Social Engineering Guide",
        type: "Article",
        url: "https://www.cisa.gov/",
      },

      {
        title: "Social Engineer Organization",
        type: "Article",
        url: "https://www.social-engineer.org/",
      },

      {
        title: "Human Hacking Checklist",
        type: "PDF",
        url: "/resources/social-engineering.pdf",
      },
    ],

    quiz: [
      {
        question:
          "Which attack focuses on manipulating people instead of computers?",

        options: ["Social Engineering", "Firewall", "Encryption", "Backup"],

        answer: "Social Engineering",
      },

      {
        question:
          "What should you do if someone urgently requests confidential information?",

        options: [
          "Verify their identity first",
          "Send the information immediately",
          "Ignore company policy",
          "Disable security software",
        ],

        answer: "Verify their identity first",
      },
    ],

    certificate: true,
  },
  {
    id: 5,

    title: "Malware Protection",

    description:
      "Learn how malware infects computers and how to defend your devices from viruses, ransomware and spyware.",

    level: "Intermediate",

    duration: "65 min",

    lessons: 6,

    category: "Device Security",

    image: "/images/MalwareProtection.jpg",

    video: "https://www.youtube.com/embed/NMYbkzjI5EY",

    content:
      "Understand different malware families, infection methods and practical strategies for protecting your computer and mobile devices.",

    learningObjectives: [
      "Understand malware types",
      "Recognize ransomware attacks",
      "Use antivirus effectively",
      "Keep systems updated",
      "Protect personal files",
      "Prevent future infections",
    ],

    curriculum: [
      {
        id: 1,
        title: "Introduction to Malware",
        duration: "10 min",
        completed: false,
      },

      {
        id: 2,
        title: "Virus vs Worm vs Trojan",
        duration: "12 min",
        completed: false,
      },

      {
        id: 3,
        title: "Ransomware Explained",
        duration: "14 min",
        completed: false,
      },

      {
        id: 4,
        title: "Antivirus Best Practices",
        duration: "10 min",
        completed: false,
      },

      {
        id: 5,
        title: "Keeping Devices Secure",
        duration: "10 min",
        completed: false,
      },

      {
        id: 6,
        title: "Course Quiz",
        duration: "9 min",
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
        title: "Malware Protection Handbook",
        type: "PDF",
        url: "/resources/malware-guide.pdf",
      },
    ],

    quiz: [
      {
        question: "What is ransomware primarily designed to do?",

        options: [
          "Encrypt files for payment",
          "Increase internet speed",
          "Protect passwords",
          "Update software",
        ],

        answer: "Encrypt files for payment",
      },

      {
        question: "Which action helps prevent malware infections?",

        options: [
          "Keep software updated",
          "Ignore security updates",
          "Disable antivirus",
          "Download cracked software",
        ],

        answer: "Keep software updated",
      },
    ],

    certificate: true,
  },
  {
    id: 6,

    title: "Online Privacy",

    description:
      "Learn how to protect your personal information and maintain privacy while using websites, apps and online services.",

    level: "Beginner",

    duration: "50 min",

    lessons: 6,

    category: "Privacy",

    image: "/images/OnlinePrivacy.jpg",

    video: "https://www.youtube.com/embed/wVyu7NB7W6Y",

    content:
      "Discover how websites collect personal information, how online tracking works and how to improve your digital privacy with practical techniques.",

    learningObjectives: [
      "Understand digital privacy",
      "Control personal information",
      "Manage browser privacy settings",
      "Recognize online tracking",
      "Use VPNs correctly",
      "Protect your digital identity",
    ],

    curriculum: [
      {
        id: 1,
        title: "Digital Footprints",
        duration: "8 min",
        completed: false,
      },

      {
        id: 2,
        title: "Cookies and Online Tracking",
        duration: "10 min",
        completed: false,
      },

      {
        id: 3,
        title: "Privacy Settings",
        duration: "10 min",
        completed: false,
      },

      {
        id: 4,
        title: "Protecting Personal Data",
        duration: "10 min",
        completed: false,
      },

      {
        id: 5,
        title: "VPN and Secure Connections",
        duration: "7 min",
        completed: false,
      },

      {
        id: 6,
        title: "Course Quiz",
        duration: "5 min",
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
        question: "Which tool encrypts your internet traffic on public Wi-Fi?",

        options: ["VPN", "USB Drive", "ZIP File", "PDF"],

        answer: "VPN",
      },

      {
        question:
          "Which technology is commonly used to track users across websites?",

        options: ["Cookies", "Keyboard", "Monitor", "Bluetooth"],

        answer: "Cookies",
      },
    ],

    certificate: true,
  },
];

export default lessons;
