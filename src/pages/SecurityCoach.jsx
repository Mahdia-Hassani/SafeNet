import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import CoachInput from "../components/coaching/CoachInput";
import CoachResponse from "../components/coaching/CoachResponse";
import SuggestedQuestions from "../components/coaching/SuggestedQuestions";

import { getSecurityAdvice } from "../services/securityCoach";

import { Shield } from "lucide-react";

function SecurityCoach() {
  const [question, setQuestion] = useState("");

  const [loading, setLoading] = useState(false);

  const [advice, setAdvice] = useState(null);

  const [error, setError] = useState("");

  async function handleAsk() {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const result = await getSecurityAdvice(question);

      setAdvice(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}

        <div className="text-center">
          <div
            className="
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-blue-50
            "
          >
            <Shield size={36} className="text-blue-600" />
          </div>

          <h1 className="mt-6 text-4xl font-bold">AI Security Coach</h1>

          <p className="mt-3 text-slate-500">
            Ask cybersecurity questions and receive personalized guidance.
          </p>
        </div>

        {/* Main Layout */}

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left */}

          <div className="space-y-6">
            <CoachInput
              question={question}
              setQuestion={setQuestion}
              onAsk={handleAsk}
              loading={loading}
            />

            <SuggestedQuestions onSelect={setQuestion} />
          </div>

          {/* Right */}

          <div className="lg:col-span-2">
            {error && (
              <div
                className="
                  mb-4
                  rounded-xl
                  bg-red-50
                  p-4
                  text-red-600
                "
              >
                {error}
              </div>
            )}

            {advice ? (
              <CoachResponse advice={advice} />
            ) : (
              <div
                className="
                  rounded-2xl
                  bg-white
                  p-12
                  text-center
                  shadow-sm
                "
              >
                <Shield size={40} className="mx-auto text-blue-500" />

                <h2 className="mt-4 text-xl font-semibold">Ready to help</h2>

                <p className="mt-2 text-slate-500">
                  Ask any cybersecurity question to receive practical advice.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SecurityCoach;
