# SafeNet

### AI-Powered Cybersecurity Awareness Platform

SafeNet is an AI-powered cybersecurity awareness platform designed to help users identify online threats, understand common scams, and build safer digital habits.

Users can submit suspicious emails, messages, or website content. SafeNet analyzes the content, detects potential risks, explains warning signs, and provides recommendations to improve online safety.

The goal of SafeNet is to reduce the risk of phishing attacks, online scams, identity theft, and other common cybersecurity threats through AI-powered education.

---

## Live Demo

![Demo live](https://safenet.ms-hassani-mail.workers.dev/)

![Demo Video](https://www.youtube.com/watch?v=z-6D_7iR5Bg)

---

# Features

## Scam Analyzer

Analyze suspicious emails, messages, and online content.

Features:

- Detect possible scam indicators
- Identify phishing patterns
- Explain security risks
- Provide safety recommendations

## AI Threat Explanation

SafeNet explains:

- Why a message may be dangerous
- What warning signs exist
- What actions users should take

## Security Coaching

Provides beginner-friendly cybersecurity guidance based on detected threats.

Examples:

- Password safety
- Phishing prevention
- Online privacy
- Safe browsing habits

## Threat Simulation Quiz

Interactive cybersecurity scenarios that help users practice responding to real-world threats.

Includes:

- Multiple-choice challenges
- Immediate feedback
- Progress tracking

## Progress Dashboard

Users can monitor their cybersecurity learning progress.

Tracks:

- Completed lessons
- Quiz results
- Safety score
- Threat analysis history

## User Authentication

Implemented with Supabase Authentication.

Includes:

- User registration
- Login system
- User profiles
- Logout functionality

---

# Tech Stack

## Frontend

- React
- Javascript
- Vite
- Tailwind CSS
- React Router

## Authentication & Database

- Supabase Authentication
- Supabase Database

## AI

- openRouter API

## Storage

- LocalStorage
- Supabase Database

## Deployment

- Cloudflare Workers & Pages

## Development Tools

- npm
- Git
- Github

---

### Getting Started

# Prerequisites

Before running SafeNet locally, make sure you have:

- Node.js Installed
- npm Installed
- Git Installed

### Installation

# Clone the repository:

git clone https://github.com/Mahdia-Hassani/SafeNet.git

# Navigate to the project directory:

cd SafeNet

Install the project dependencies:

npm install

Start the development server:

npm run dev

Vite will provide a local development URL in the terminal.

### Environment Variables

# SafeNet uses environment variables for external services such as Supabase and OpenRouter.

Create a .env file in the project root:

VITE_SUPABASE_URL=your_supabase_url VITE_SUPABASE_ANON_KEY=your_supabase_anon_key VITE_OPENROUTER_API_KEY=your_openrouter_api_key

# Important: Never commit your .env file or private API keys to GitHub.

For deployment, configure the required environment variables through the deployment platform instead of storing them in the repository.

### Project Information

# SafeNet was developed as a web development and cybersecurity awareness project, combining frontend development, AI integration, authentication, and interactive educational features into a single platform.

# The project focuses on making cybersecurity awareness simple, practical, and accessible for everyday internet users.
